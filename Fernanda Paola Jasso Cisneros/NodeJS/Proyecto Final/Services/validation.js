const Joi = require('joi');

module.exports = {
    userRegister: function(userData){
        var schema = Joi.object({ //ayuda a validar que los datos registrados en usermodels sean correctos
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(16).required(),
            phone: Joi.string().min(10).max(10).optional()

        });
        
        return schema.validate(userData);
    },

    userLogin: function(loginData){
        var schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().password().required()
        });

        return schema.validate(loginData);
    }
};