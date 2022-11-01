const express = require('express');
const Validate = require('../validation');
const router = express.Router();

const Product = require('../models/product');

router.get('/recommended', async function(req, res){
    var products = await Product.find({}, {_id: 0, __v: 0})
    return res.send(products);
});

router.post('/:sku', async function(req, res){
    const sku = req.params.sku;
    const product = req.body;

    var valid = Validate.newProduct(product);
    if(valid.error){
        return res.status(400).send({
            message: "Error: Invalid Product",
            details: valid.error.details
        });
    }

    var existingProduct = await Product.findOne({sku: sku}); //para productos existentes, lo revisa primero
    if(existingProduct){
        res.status(403).send({
            message: `SKU already exists with [${sku}]`,
            productDuplicate: existingProduct
        });
    }

    product.sku = sku;
    var newProduct = new Product(product); //si pasa existingProduct, corre la creación

    await newProduct.save();

    res.send({
        message: "Product created"
    });
})