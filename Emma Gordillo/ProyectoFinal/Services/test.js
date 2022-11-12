const utils = require('./utils');
const Validate = require('./validation');

var resultado = Validate.userRegister({
    name: "Emma",
    lastName: "Gordillo",
    email: "elizaemma@hotmail.com",
    phone: 8180928619
});

Utils.generateToken('elizaemma@hotmail.com');

console.log(resultado.error);
