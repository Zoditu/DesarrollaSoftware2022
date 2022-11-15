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
    },

    productUpdate: function(product) {
        var schema = Joi.object({
            sku: Joi.string().optional(),
            old_sku: Joi.string().optional(),
            stock: Joi.number().optional(),
            enabled: Joi.boolean().optional(),
            categoryId: Joi.number().optional(),
            subCategoryId: Joi.number().optional().allow(null),
            categoryType: Joi.string().optional().allow(null),
            name: Joi.string().optional(),
            description: Joi.string().optional(),
            model: Joi.string().optional(),
            brand: Joi.string().optional(),
            color: Joi.string().optional(),
            weight: Joi.string().optional(),
            size: Joi.string().optional(),
            price: Joi.number().optional(),
            images: Joi.array().allow(Joi.string()).optional()
        });

        return schema.validate(product);
    },

    newOrder: function(order) {
        var schema = Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.string().min(10).max(10).optional(),
            status: Joi.string().required().allow('PAGADO', 'PENDIENTE', 'CANCELADO', 'DEVOLUCIÓN', 'ENVIADO'),
            cart: Joi.object({
                products: Joi.array().required().allow({
                    sku: Joi.string().required(),
                    detail: Joi.object({
                        name: Joi.string().required(),
                        image: Joi.string().optional(),
                        price: Joi.number().required()
                    }).required(),
                    amount: Joi.number().required(),
                    subTotal: Joi.number().required(),
                    tax: Joi.number().required(),
                    total: Joi.number().required()
                }).required(),
                subTotal: Joi.number().required(),
                tax: Joi.number().required(),
                total: Joi.number().required()
            }).required(),
            shipping: Joi.object({
                name: Joi.string().required(),
                lastName: Joi.string().required(),
                payer_id: Joi.string().optional(),
                address: Joi.object({
                    address_line_1: Joi.string().required(),
                    address_line_2: Joi.string().required(),
                    admin_area_1: Joi.string().required(),
                    admin_area_2: Joi.string().required(),
                    country_code: Joi.string().required(),
                    postal_code: Joi.number().required()
                }).optional()
            }).required(),
            summary: Joi.string().optional()
        });

        return schema.validate(order);
    }
};
