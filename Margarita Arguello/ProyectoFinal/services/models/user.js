/* le decimos a la BD que modelo de datos es el
que va a recibir    nom_variable: Tipo */

const mongoose = require('mongoose');

// Datos del usuario que se registra
module.exports = mongoose.model('User',{
    username: String,
    password:String,
    email: String,
    name: String,
    lastName: String,
    phone: Number,
    address:{
        street: String,
        no: Number,
        hood: String,
        city: String,
        state: String,
        country: String,
        zip: Number,
        details: String
    },
    orders: Array,
    cartId: String,
    permissions:{
        admin: Boolean,
        regular: Boolean,
        enabled: Boolean
    },
    sessions: Object
}, 'Users');