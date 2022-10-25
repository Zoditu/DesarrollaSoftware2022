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

    userLogin: function(loginData) {
        var schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        return schema.validate(loginData);
    },

    newProduct: function(product) {
        var schema = Joi.object({
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
