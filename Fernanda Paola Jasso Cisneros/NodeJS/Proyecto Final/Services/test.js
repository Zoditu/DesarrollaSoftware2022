const Validate = require('./validation');
const Utils = require('./utils');

var result = Validate.userRegister({
    name: "Fernanda",
    lastName: "Jasso",
    email: "fernandajasso71@hotmail.com",
    noExiste = true
});

Utils.generateToken('fernandajasso71@hotmail.com');