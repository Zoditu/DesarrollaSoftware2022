const mongoose = require('mongoose');     

module.exports = mongoose.model('Category', {  //Categoryn nombre del modelo
    name: String,
    id: Number,
    description: String
}, 'Categories');           //Categories nombre de la base de datos en Mongo.

