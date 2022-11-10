const mongoose = require('mongoose');

module.exports = mongoose.model('Order', {
    id: String,
    email: String,
    phone: String,
    status: String,
    date: Date,
    cart: {
        products: [{
            sku: String,
            detail: {
                name: String,
                image: String,
                price: Number
            },
            amount: Number,
            subTotal: Number,
            tax: Number,
            total: Number
        }],
        subTotal: Number,
        tax: Number,
        total: Number
    },
    shipping: {
        name: String,
        lastName: String,
        payer_id: String,
        address: {
            address_line_1: String,
            address_line_2: String,
            admin_area_1: String,
            admin_area_2: String,
            country_code: String,
            postal_code: Number
        }
    },
    summary: String
}, 'Orders');