const mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    username: String,
    email: String,
    name: String,
    lastName: String,
    phone: String,
    address: {
        street: String,
        num: Number,
        neighborhood: String,
        city: String,
        state: String,
        country: String,
        zip: Number,
        details: String
    },
    orders: Array,
    cartId: String,
    permissions: {
        admin: Boolean,
        regular: Boolean,
        enabled: Boolean
    },
    sessions: Object
}, 'Users');