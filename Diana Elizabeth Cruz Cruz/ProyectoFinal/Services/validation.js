const Joi = require('joi');

module.exports = {
    userRegister: function(user) {
        var schema = Joi.object({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(16).required(),
            phone: Joi.string().min(10).max(10).optional()
        });

        return schema.validate(user);
    },

    userUpdate: function(user){
        var schema = Joi.object({
            name: Joi.string().optional(),
            lastName: Joi.string().optional(),
            phone: Joi.string().min(10).max(10).optional(),
            address: Joi.object({
                street: Joi.string().required(),
                no: Joi.number().required(),
                hood: Joi.string().required(),
                city: Joi.string().required(),
                state: Joi.string().required(),
                country: Joi.string().required(),
                zip: Joi.number().required(),
                details: Joi.string().required(),
            })

        });
    }
    
    userLogin: function(loginData) {
        var schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        return schema.validate(loginData);
    }
};


newOrder_ function(order){
    var schema= Joi.pobject({
        email: Joi.string().email().required(),
        phone: Joi.string().min(10).max(10).optional(),
        status: Joi.string().status().required().allow('PAGADO', 'CANCELADO', 'FINALIZADO'),
        cart: Joi.object({
            products: Joi.string().required().allow(),
            sku: Joi.string().required(),
            
        })
    })
}