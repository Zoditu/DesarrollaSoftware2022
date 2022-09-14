const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Utils = require('../utils');
const { userRegister } = require('../validation');
const Validate = require('../validation');

//Crear todos los endpoints relacionados a /users
router.get('/prueba', function(req, res){
    res.send({
        prueba: "OK/users/prueba"
    })
});

router.post('/register', async function(req, res){
    var loginData =req.body;
    var valid = Validate.userLogin(loginData);
    if(valid.error){
        return res.status(400).send(valid.error.details);
    }

    
    var body = req.body;
    var valid = Validate.userRegister(body);
    if (valid.error){
        return res.status(400).send(valid.error.details);
    }

    var duplicatedUser = await User.findOne({
        email: loginData.email,
        password: loginData.password
    });

    if(!user){
        return res.status(400).send({
            message:`Invalid user/or password.`
        });
    }

    if(!user.sessions){
        user.sessions = {};
    }

    const token = utils.generateToken(user.email);
    user.sessions[token] ={
        logged: true,
        date: new Date()
    } 

    res.cookie("SID", user.username);
    res.cookie("TOKEN", token);

    if(duplicatedUser){
        return res.status(403).send({
            message: `El usuario con el email '${body.email}' ya se registró`
        });
    };

    var nuevoUser = new User(body);
        nuevoUser.username = Utils.encodeEmail()
        nuevoUser.sessions = {};
        nuevoUser.markModified("sessions");
            nuevoUser.permissions = {
            regular: true,
            enabled: false
        };
    nuevoUser.address={};

    await nuevoUser.save();

    res.send({
        status: "Created",
        user: body
    })
});

module.exports =  router;