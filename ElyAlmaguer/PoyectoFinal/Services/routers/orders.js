const express = require('express');
const router = express.Router();

const Validate = require('../validation');
const Order = require('../models/order');
const Cart = require('../models/cart');
const Product = require('../models/product');

router.post('/:orderId', async function(req, res) {
    const orderId = req.params.orderId;
    const order = req.body;

    const CARTID = req.cookies["CARTID"];
    var cart = await Cart.findOne({ id: CARTID });
    if(!cart) {
        res.clearCookie("CARTID");
    } else {

        for (var i = 0; i < cart.products.length; i++) {
            const product = cart.products[i];
            var p = await Product.findOne({ sku: product.sku });
            if(p) {
                p.stock -= product.amount;
                await p.save();
            }
        }

        cart.products = [];
        cart.subTotal = 0;
        cart.tax = 0;
        cart.total = 0;

        await cart.markModified("products");
        await cart.save();
    }

    var valid = Validate.newOrder(order);
    if(valid.error) {
        return res.status(400).send({
            message: "Error: Invalid Order Details: " + valid.error.details,
            details: valid.error.details
        });
    }

    var existe = await Order.findOne({id: orderId}, {
        _id: 0,
        __v: 0
    });

    if(existe) {
        return res.status(403).send({
            message: `La orden con el id [${orderId}] ya existe.`
        });
    }

    order.id = orderId;
    var newOrder = new Order(order);

    await newOrder.save();

    varSID 
    res.send({
        message: "Orden creada"
    });
});



router.get('/validate/:orderId', async function(req, res){
    const orderId = req.params.orderId;
    var order = await Order.findOne({ id: orderId });

    if(order) {
        return res.send({
            valid: true
        });
    } else {
        return res.send({
            valid: false
        });
    }
});

router.get('/:orderId', async function(req, res){
    const orderId = req.params.orderId;
    var order = await Order.findOne({ id: orderId }, {
        _id: 0,
        __v: 0
    });

    return res.send({
        result: order
    });
});

module.exports = router;