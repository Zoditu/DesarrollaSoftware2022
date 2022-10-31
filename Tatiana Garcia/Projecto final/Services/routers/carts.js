const express = require('express');
const router = express.Router();

const Validate = require('../validation');
const Cart = require('../models/cart');
const User = require('../models/user');
const Product = require('../models/product');
const Utils = require('../utils');

const DEFAULT_IMAGE='';
const TAX = 0.16;

async function ValidUser(SID, TOKEN) {
    const result = {
        valid: false, 
        tokenValid: false,
        user: null
    };

    var user = await User.findOne({
        username: SID 
    });

    if(!user) {
        result.valid = false;
        return result;
    } else {
        result.valid = true;
    }

    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        result.tokenValid = true;
        result.user = user;
    }

    return result;
}

async function FindCart(cookies, user) {
    var SID = cookies["SID"];
    var TOKEN = cookies["TOKEN"];
    var CARTID = cookies["CARTID"];

    var cart = null;

    if(!SID || !TOKEN) {
        if(CARTID) {
            //Recuperar la referencia del carrito 
            cart = await Cart.findOne({id: CARTID},{
                _id: 0,
                __v: 0,
                username: 0
            });
        }
        if(!cart) {
            //crear uno vacio y mandar este
            cart = {
                id: Utils.generateCartID(),
                products: [],
                subTotal: 0,
                tax: 0,
                total: 0
            };
            var emptyAnonCart = new Cart(cart);
            await emptyAnonCart.save();
        }
    } else if(user) {
        //Buscar el carrito del usuario
        cart = await Cart.findOne({username: SID}, {
            username: 0,
        });

        if(cart) {
            if(CARTID && cart.id !== CARTID) {
                var prevCart = await Cart.findOne({id: CARTID});
                if(prevCart) {
                    //MERGE
                    for(var i = 0; i < cart.products.length; i++) {
                        const product = cart.products[i];

                        for(var j = 0; j < prevCart.products.length; j++) {
                            const newProduct = prevCart.products[j];
                            
                            if(product.sku === newProduct.sku) {
                                product.amount += newProduct.amount;
                                prevCart.products.splice(j, 1);
                                j -= 1;
                            }
                        }
                    }

                    cart.products.push(Array.from(prevCart.products));
                    await prevCart.delete();
                }
            }

            var validatedProducts = await ValidateCart(Array.from(cart.products));
            cart.products = validatedProducts.products;
            cart.subTotal = validatedProducts.subTotal;
            cart.tax = validatedProducts.tax;
            cart.total = validatedProducts.total;

            await cart.markModified('products');
            await cart.save();

            cart = cart.toObject();
            delete cart._id;
            delete cart.__v;
        } else {
            cart = {
                id: Utils.generateCartID(),
                username: SID,
                products: [],
                subTotal: 0,
                tax: 0,
                total: 0
            };
            var emptyAnonCart = new Cart(cart);
            await emptyAnonCart.save();

            delete cart.username;
        }
    }

    return cart;
}

async function ValidateCart(products) {

    var subTotal = 0;
    var tax = 0;
    var total = 0;

    for (var i = 0; i < products.length; i++) {
        const product = products[i];
        var productDB = (await Product.findOne({ sku: product.sku }, {_id: 0, __v: 0})) || { stock: 0, enabled: false };
        if(productDB.stock < 1 || !productDB.enabled) {
            products.splice(i, 1);
            i -= 1;
        } else {

            if(productDB.stock < product.amount) {
                product.amount = productDB.stock;
            }

            product.detail.name = productDB.name;
            product.detail.image = productDB.images[0] || DEFAULT_IMAGE;
            product.detail.price = productDB.price;

            var _total = product.amount * product.detail.price;
            product.subTotal = (_total * (1.0 - TAX)).toFixed(2);
            product.tax = (_total * TAX).toFixed(2);
            product.total = _total.toFixed(2);

            subTotal += product.subTotal;
            tax += product.tax;
            total += product.total;
        }
    }

    return {
        products: products,
        subTotal: subTotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

router.get('/', async function(req, res){
    var cookies = req.cookies;

    var SID = cookies["SID"];
    var TOKEN = cookies["TOKEN"];

    var cart = await FindCart(cookies);

    if(!SID || !TOKEN) {

        res.clearCookie("SID");
        res.clearCookie("TOKEN");
        res.cookie("CARTID", cart.id);

        return res.send(cart);
    }

    var user = await ValidUser(SID, TOKEN);
    
    if(!user.valid) {
        res.clearCookie("SID");
        res.clearCookie("TOKEN");

        return res.status(404).send({
            message: `Invalid username.`
        });
    } else if(user.valid && !user.tokenValid) {
        res.clearCookie("SID");
        res.clearCookie("TOKEN");

        return res.status(401).send({
            message: "Invalid token session"
        });
    } 
    
    cart = await FindCart(cookies, true);
    if(cart.id !== cookies["CARTID"]) {
        cart = await FindCart(cookies, true);
    }
    
    res.cookie("CARTID", cart.id);

    return res.send(cart);
});

router.put('/:sku', async function(req, res){
    const cookies = req.cookies;
    const sku = req.params.sku;
    var amount = req.body.amount || 1;
    var CARTID = cookies["CARTID"];

    var cart = await Cart.findOne({id: CARTID});
    var product = await Product.findOne({ sku: sku });
    if(!cart || !product) {
        if(!cart) {
            res.clearCookie("CARTID");
        }

        return res.status(404).send({
            message: !cart ? `Invalid Cart ID.` : `Invalid Product SKU.`
        });
    }

    if(isNaN(amount) || amount < 1) {
        amount = 1;
    } else {
        amount = parseInt(amount);
    }

    var alreadyInCart = false;
    for (var i = 0; i < cart.products.length; i++) {
        const productCart = cart.products[i];
        
        if(productCart.sku === sku) {
            productCart.amount += amount;
            alreadyInCart = true;
            break;
        }
    }

    if(!alreadyInCart) {
        cart.products.push({
            sku: sku,
            detail: {},
            amount: amount
        });
    }

    var validatedProducts = await ValidateCart(Array.from(cart.products));
    cart.products = validatedProducts.products;
    cart.subTotal = validatedProducts.subTotal;
    cart.tax = validatedProducts.tax;
    cart.total = validatedProducts.total;

    await cart.markModified('products');
    await cart.save();

    cart = cart.toObject();
    delete cart._id;
    delete cart.__v;
    delete cart.username;

    return res.send(cart);

});

module.exports = router;