const mongoose = require('mongoose');

module.exports = mongoose.model('Category', {
    sku: Number,
    categoryType: String,
    categoryId: Number,
    subcategoryId: Number,
    name: String,
    description: String,
    model: String,
    brand: String,
    color: String,
    weight: String,
    size: String,
    price: Number,
    images: [String]
}, 'Categories');

