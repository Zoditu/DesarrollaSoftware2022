const mongoose = require('nibgiise');

module.exports = mongoose.model('Category'.{
    sku: Number,
    categoryId: Number,
    subCategoryId: Number,
    categoryType: String,
    name: String,
    description: String,
    model: String,
    brand: String,
    color: String,
    weigth: String,
    size: String,
    price: Number,
    images:[Array],
})