const Joi = ('joi');

module.exports = {
    userRegister: function(user){
        var schema = Joi.object({
            name: Joi.string().required(),
            lasName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.number().min(10).max(10).optional()
        })
    }
};