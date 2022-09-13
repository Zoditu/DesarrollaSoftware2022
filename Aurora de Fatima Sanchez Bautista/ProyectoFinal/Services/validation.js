const Joi = require('joi');
//const schema = require('./models/user');

module.exports = {
    userRegister: function(user) {
        var schema = Joi.object({
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().min(10).max(10).optional()
        });
        
        return schema.validate(user);
    }
};

