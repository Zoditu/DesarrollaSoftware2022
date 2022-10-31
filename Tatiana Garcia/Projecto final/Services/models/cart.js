const mongoose = require('mongoose');

module.exports = mongoose.model('Cart', {
    id: String,
    username: String,
    products: [Object],
    total: Number
}, 'Carts');