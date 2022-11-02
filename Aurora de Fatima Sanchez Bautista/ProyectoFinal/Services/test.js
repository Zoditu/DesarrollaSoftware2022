const Validate = require('./validation');
const Utils = require('./utils');

var resultado = Validate.userRegister({
    name: "Aurora",
    lastName: "Sanchez Bautista",
    email: "afsb@gmail.com",
    noExiste: true
});

Utils.generateToken('aurorafsb@gmail.com');

//console.log(resultado);