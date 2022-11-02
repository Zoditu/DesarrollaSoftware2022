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
    },

    newProduct: function(product){
        var schema = Joi.object({
            categoryType: Joi.String().optional().allow(null),
            categoryId: Joi.number().required(),
            subcategoryId: Joi.number().optional().allow(null),
            name: Joi.String().required(),
            description: Joi.String().required(),
            model: Joi.String().required(),
            brand: Joi.String().required(),
            color: Joi.String().required(),
            weight: Joi.String().required(),
            size: Joi.String().required(),
            price: Joi.number().required(),
            images: Joi.String().required(),
        });

        return schema.validate(product);
    },
};