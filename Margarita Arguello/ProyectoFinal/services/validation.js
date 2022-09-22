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

// esquema de validacion del loggin
    userLogin: function(loginData){
        var schema= Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });
        
        return schema.validate(loginData);
        }

};