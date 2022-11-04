const mongoose = require('mongoose');

module.exports = mongoose.model('SubCategory', {
    name: String,
    id: Number,
    parentCategory: Number,
    types: [String]       //el modelo regresa un arreglo de textos.
}, 'SubCategories');      // Base de datos de Mongo.


