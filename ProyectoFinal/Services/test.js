const Validate = require('./validation');

var resultado = Validate.userRegister({
    name: "Kevin",
    lastName: "Martin del Campo",
    email: "kmcf90@gmail.com",
    noExiste: true
});

console.log(resultado);