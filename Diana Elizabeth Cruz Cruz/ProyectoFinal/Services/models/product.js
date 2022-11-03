const { string } = require('joi');
const mongoose = require('mongoose');

module.exports = mongoose.model('products',{
    sku: Number,
    categoryId: Number,
    subCategory: Number,
    categoryType: Number,
    name: String,
    description: String,
    model: String,
    brand: String,
    color: String,String,
    weight: String,
    size: String,
    price: Number,
    images: [String],
}, Categories);