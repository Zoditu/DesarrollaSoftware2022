const Joi = require('joi');

module.exports = {
    userRegister: function(user) {
        var schema = Joi.object({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(16).required(),
            phone: Joi.number().min(10).max(10).optional()
        });

        return schema.validate(user);
    },
    userLogin: funtion(loginData) {
        var schema= Joi.object ({
            email: Joi.string() .email().required(),
            password: Joi.string() .required()      
    });
    return schema.validate(loginData);
    }
};
