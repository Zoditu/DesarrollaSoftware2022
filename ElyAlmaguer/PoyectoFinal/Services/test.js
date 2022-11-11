const Validate = require('./validation');
const Utils = require('./utils');

var resultado = Validate.userRegister({
    name: "Elizabeth",
    lastName: "Almaguer",
    email: "elyalmaguer@gmail.com",
    password: "A1234567",
    phone: "1234567899",
    noExiste: true
});
// console.log(resultado.error);

Utils.generateToken('elyalmaguer@gmail.com');

//console.log(resultado);