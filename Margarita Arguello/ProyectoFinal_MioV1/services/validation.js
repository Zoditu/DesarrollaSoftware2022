// npm istall joi --> librerias para validar datos
const Joi = require('joi');
const user = require('./models/user');

// moduel.export es el objeto donde se validan las variables
module.exports={

// esquema de validacion del registro de usuarios
    userRegister:function(user){
        var schema= Joi.object({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(16).required(),
            phone: Joi.string().min(10).max(10).optional()
        });

        return schema.validate(user);
    },

// esquema de validacion de los datos adicionales del usuario
    userUpdate: function(user) {
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
                details: Joi.string().required()
            }).optional()
        });

        return schema.validate(user);
    },


// esquema de validacion del loggin
    userLogin: function(loginData){
        var schema= Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
        
        return schema.validate(loginData);
        },

//esquema de validacion del producto
newProduct: function(product) {
    var schema = Joi.object({
        stock: Joi.number().required(),
        enabled: Joi.boolean().required(),
        categoryId: Joi.number().required(),
        subCategoryId: Joi.number().optional().allow(null),
        categoryType: Joi.string().optional().allow(null),
        name: Joi.string().required(),
        description: Joi.string().required(),
        model: Joi.string().required(),
        brand: Joi.string().required(),
        color: Joi.string().required(),
        weight: Joi.string().required(),
        size: Joi.string().required(),
        price: Joi.number().required(),
        images: Joi.array().optional()
    });

    return schema.validate(product);
}

};