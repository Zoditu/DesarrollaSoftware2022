const mongoose = require('mongoose');

module.export = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    addres: {
        street: String,
        no: Number,
        hood: String,
        city: String,
        zip: Number
    },
    orders: Array,
    cartID: String,
    permissions:{
        admin: Boolean,
        regular: Boolean,
        enabled:Boolean
    },
    sessions: Object

}, 'Users');