const express = require('express');
const router = express.Router();

const Product = require('../models/product');

router.get('/recommended', async function(req, res){
    var products = await Product.find({}, {_id: 0, __v: 0}).sort({sku: -1}).limit(3);
    return res.send(products);
});

module.exports = router;