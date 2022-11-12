const express = require('express');
const router = express.Router();

const Validate = require('../validation');
const Product = require('../models/product');

const maxLimit = 12;
const startPage = 1;

router.get('/recommended', async function(req, res){
    var products = await Product.find({}, {_id: 0, __v: 0}).sort({sku: -1}).limit(3);
    return res.send(products);
});

router.post('/:sku', async function(req, res) {
    //:sku es un path parameter
    const sku = req.params.sku;
    const product = req.body;

    var valid = Validate.newProduct(product);
    if(valid.error) {
        return res.status(400).send({
            message: "Error: Invalid Product Details: " + valid.error.details,
            details: valid.error.details
        });
    }

    var existe = await Product.findOne({sku: sku}, {
        _id: 0,
        __v: 0
    });

    if(existe) {
        return res.status(403).send({
            message: `El producto con el sku [${sku}] ya existe.`,
            productoDuplicado: existe
        });
    }

    product.sku = sku;
    var newProduct = new Product(product);

    await newProduct.save();

    res.send({
        message: "Producto creado"
    });
});

router.put('/:sku', async function(req, res) {
    //:sku es un path parameter
    const sku = req.params.sku;
    const product = req.body;

    var valid = Validate.productUpdate(product);
    if(valid.error) {
        return res.status(400).send({
            message: "Error: Invalid Product Details: " + valid.error.details,
            details: valid.error.details
        });
    }

    var producto = await Product.findOne({sku: sku});

    if(!producto) {
        return res.status(404).send({
            message: `El producto con el sku [${sku}] no existe.`
        });
    }

    var keys = Object.keys(product);
    for (var i = 0; i < keys.length; i++) {
        const key = keys[i];

        switch(key) {
            case "sku":
                if(product.sku !== sku) {
                    var existe = await Product.findOne({ sku: product.sku });
                    if(existe) {
                        return res.status(403).send({
                            message: `Error, el sku [${product.sku}] ya existe`,
                        });
                    }

                    producto.sku = product.sku;
                }
            break;

            case "images":
                producto.images = product.images;
                await producto.markModified('images');
            break;
            
            case "stock":
                producto.stock = product.stock;
            break;

            case "enabled":
                producto.enabled = product.enabled;
            break;

            case "categoryId":
                producto.categoryId = product.categoryId;
            break;

            case "subCategoryId":
                producto.subCategoryId = product.subCategoryId;
            break;

            case "categoryType":
                producto.categoryType = product.categoryType;
            break;

            case "name":
                producto.name = product.name;
            break;

            case "description":
                producto.description = product.description;
            break;

            case "model":
                producto.model = product.model;
            break;

            case "brand":
                producto.brand = product.brand;
            break;

            case "color":
                producto.color = product.color;
            break;

            case "weight":
                producto.weight = product.weight;
            break;

            case "size":
                producto.size = product.size;
            break;

            case "price":
                producto.price = product.price;
            break;
        }   
    }

    await producto.save();

    res.send({
        message: "Producto modificado"
    });
});

router.get('/all', async function(req, res){
    var query = req.query;

    var filter = {};
    if(!isNaN(query.category)) {
        filter.categoryId = query.category;

        if(!isNaN(query.subCategory)){
            filter.subCategoryId = query.subCategory;

            if(query.categoryType) { 
                //Blush, blush, BLUSH
                filter.categoryType = {
                    $regex: query.categoryType,
                    $options: "i"
                };
            }
        }
    }

    if(query.name) {
        filter.name = {
            $regex: query.name,
            $options: "i"
        };
    }

    if(query.model) {
        filter.model = {
            $regex: query.model,
            $options: "i"
        };
    }

    if(query.brand) {
        filter.brand = {
            $regex: query.brand,
            $options: "i"
        };
    }

    if(query.color) {
        filter.color = {
            $regex: query.color,
            $options: "i"
        };
    }

    if(query.price) {
        const range = query.price.split(',');
        //Solo deben existir dos elementos entre la ','
        //Ej: 10, 11 debe regresar: ["10"," 11"]
        if(range.length === 2) {
            var min = range[0].trim();
            var max = range[1].trim();

            //Ambos deben ser números
            if(!isNaN(min) && !isNaN(max)) {
                min = parseFloat(min);
                max = parseFloat(max);
                //0,100
                if(min > max) {
                    var swap = min;
                    min = max;
                    max = swap;
                }

                filter.price = { $gte: min, $lte: max };
            }
        }
    }

    if(query.stock === true) {
        filter.stock = { $gt: 0 };
    } else if(query.stock === false) {
        filter.stock = { $lte: 0 };
    }
    
    var products = await Product.find(filter, {
        _id: 0,
        __v: 0
    });

    var page = startPage;
    if(!isNaN(query.page)) {
        page = parseInt(query.page);
    }

    var indexProducts = (page - 1) * maxLimit;
    var result = products.splice(indexProducts, maxLimit);

    return res.send(result);

})

router.get('/countPages', async function(req, res){
    var pages = await Product.count();

    return res.send({
        pages: Math.ceil(pages/maxLimit)
    });
});

router.delete('/delete/:sku', async function(req, res){
    const sku = req.params.sku;
    await Product.deleteOne({ sku: sku });

    return res.send({
        deleted: true
    });
});

module.exports = router;