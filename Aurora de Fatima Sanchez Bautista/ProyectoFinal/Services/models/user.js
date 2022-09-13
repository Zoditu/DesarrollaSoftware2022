const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: String,
    email: String,
    name: String,
    lastName: String,
    phone: Number,
    address: {
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
    permissions: {
        admin: Boolean
    }
}, 'Users');