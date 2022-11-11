const mongoose = require('mongoose');

module.exports = mongoose.model('Cart', {
    id: String,
    username: String,
    products: [{
        sku: String,
        detail: {
            name: String,
            image: String,
            price: Number,
            unitaryPrice: Number,
            tax: Number
        },
        amount: Number,
        subTotal: Number,
        tax: Number,
        total: Number
    }],
    subTotal: Number,
    tax: Number,
    total: Number
}, 'Carts');