const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    name: String,
    id: Number,
    parentCategory: Number,
    types: [String]
}, 'Subcategories');