const { BSONError } = require('bson');
const express = require(`express`);
const router = express.Router();

const User = require('../models/user');
const Utils = require ('../utils.js');
const Validate = require('../validation');

//crear enpoints de /users

/*router.get(`/prueba`, function(req, res){
    res.send({
        prueba: "OK, users/prueba"
    });
});*/

router.post(`/login`, async function(req, res){
    var loginData = req.body;
    var valid = Validate.userLogin(loginData);
    if(valid.error){
        return res.status(400).send(valid.error.details);
    };

    var user = await User.findOne({
        email: loginData.email,
        password: loginData.password
    });

    if(!user){
        return res.status(404).send({
            message: `Usuario/contraseña invalidos`
        });
    }

    const token = Utils.generateToken(user.email);
    user.sessions[token] = {
        logged: true,
        date: new Date()
    }

    res.cookie("SID", user.username);
    res.cookie("TOKEN", token);

    res.send({
        login: "ok"
    });

});

router.post('/register', async function(req,res){
    
    var body = req.body;
    var valid = Validate.userRegister(body);
    if(valid.error){
        return res.status(400).send(valid.error.details);
    };

    var duplicatedUser = await User.findOne({
        email: body.email
    });

    if(duplicatedUser) {
        return res.status(403).send({
            message: `El usuario con el email '${body.email}' ya esta registrado`
        });
    }

    var nuevoUser = new User(body);
    nuevoUser.username = Utils.encodedEmail(nuevoUser.email);
    nuevoUser.sessions = {};
    nuevoUser.markModified("sessions");
    nuevoUser.permissions={
        admin: false,
        regular: true,
        enable: false
    };


    await nuevoUser.save();

    res.send({
        status: "Created",
        user: body
    })
})

module.exports = router;