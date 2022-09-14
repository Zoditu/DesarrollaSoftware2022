const Validate = require('./validation');
const Utils = require('./utils');

var resultado = Validate.userRegister({
    name: "Kevin",
    lastName: "Martin del Campo",
    email: "kmcf90@gmail.com",
    noExiste: true
});

Utils.generateToken('Kevinmcf90@gmail.com');

//console.log(resultado);