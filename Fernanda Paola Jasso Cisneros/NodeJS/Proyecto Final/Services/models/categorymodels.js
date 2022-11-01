const mongoose = require('mongoose');

module.exports = mongoose.model('Category', {
    name: String,
    id: Number,
    description: String
}, 'Categories'); //collecion base de datos