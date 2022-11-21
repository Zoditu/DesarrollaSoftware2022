const Joi = require('joi');

module.exports = {
    userRegister: function(user){
        var schema = Joi.object({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().min(10).max(10).optional()
        })

        return schema.validate(user);
    }
};