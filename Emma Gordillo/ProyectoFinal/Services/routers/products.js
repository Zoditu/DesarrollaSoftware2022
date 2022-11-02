const express = require('express');
const router = express.Router();

const Validate = require('../validation');
const Product = require('../models/product');

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

module.exports = router;