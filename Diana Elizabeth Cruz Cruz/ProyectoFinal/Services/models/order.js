const { string } = require('joi');
const mongoose = require('mongoose');

module.exports = mongoose.model('Order', {
    id: String,
    email: Number,
    phone: String,
    status: String,
    shipping:{
        name: String,
        lastName: String,
        payerId:String,
        address:{
            address_line_1: String,
            address_line_2: String,
            admin_area_1: String,
            admin_area_2: String,
            country_code: String,
            postal_code: String,
        }
    },
    summary: String,
}, 'Orders');