const mongoose = require('mongoose');

module.exports = mongoose.model('SubCategory', {
    name: String,
    id: Number,
    parentCategory: Number,
    types: [String]
}, 'SubCategories');