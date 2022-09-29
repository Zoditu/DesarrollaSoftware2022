const Validate = require('./validation');
const Utils = require('./utils');

var resultado = Validate.userRegister({
    name: "Ely",
    lastName: "Almaguer",
    email: "elyalmaguer@gmail.com",
    noExiste: true
});

Utils.generateToken('elyalmaguer@gmail.com');

//console.log(resultado);