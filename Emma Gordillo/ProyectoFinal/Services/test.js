const Validate = require('./validation');

var resultado = Validate.userRegister({
    name: "Emma",
    lastName: "Gordillo",
    email: "elizaemma@hotmail.com",
    phone: 8180928619
});

console.log(resultado.error);
