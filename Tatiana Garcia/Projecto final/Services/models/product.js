const mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
    sku: String,
    categoryId: Number,
    subCategoryId: Number,
    categoryType: String,
    name: String,
    description: String,
    model: String,
    brand: String,
    color: String,
    weight: String,
    size: String,
    price: Number,
    images: [String]
}, 'Products');