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

    userLogin: function(loginData) {
        var schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        return schema.validate(loginData);
    },

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

