const express = require('express');
//const { validate } = require('../models/user');
const router=express.Router();

const User = require('../models/user');
const Utils = require('../utils');
const Validate = require('../validation')


/*
router.get('/prueba',function(req,res){
    res.send({
        prueba: "ok /users/prueba"
    });
});
*/

router.get('/profiles', async function(req, res){
    var cookies = req.cookies;
    var SID = cookies['SID'];
    var TOKEN = cookies['TOKEN'];

 // si ya se hizo loggin una vez debe tener SID y Token   
    if(!SID || !TOKEN){
        return res.status(400).send({
            message: 'Falta SID o TOKEN'});
    }

 // Buscamos si existe el usuario y asignamos SID   
    var user = await User.findOne({
        username: SID
        },
        {
        _id: 0,
        name: 1,
        lastName: 1,
        email: 1,
        orders: 1,
        sessions: 1
        });

    if (!user){
        return res.status(404).send({
            message: 'Usuario Invalido'
        });
    }

    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        res.send({
            message: "Sesion Valida",
            user: user
        });
    } else {
        res.status(401).send({
            message: "Sesion Invalida "
        });
    }

});

// Crear los endpoint relacionados a login
router.post('/login', async function(req, res){
// optengo los datos del body
    var loginData=req.body;
// valido los datos    
    var valid=Validate.userLogin(loginData);

    if(valid.error){
        return res.status(400).send(valid.error.details);
    }

    // await se usa para esperar la respuesta
    var user = await User.findOne({
        email: loginData.email,
        password: loginData.password
    });

    // si no lo encontro manda un error
    if(!user){
        return res.status(403).send({
            message: `email y/o password incorrecto`
        });
    }

    // si no tiene una sesion anterior la creo en blanco
    if(!user.sessions)
        {
            user.sessions={};
        }

    // genero un token unico para agregar cookies
    const token = Utils.generateToken(user.email)
    user.sessions[token] = {
        logged: true,
        date: new Date()
    }

    // obligo a mongoes a que guarde la informacion
    user.markModified('sessions');
    
    //guardo el usuario y password
    await user.save();

    res.cookie("SID", user.username);
    res.cookie("TOKEN", token);

    res.send({
        login: "OK"
    });
});

// Crear los endpoint relacionados al registro
router.post('/register', async function(req, res){
    var body = req.body;
    var valid = Validate.userRegister(body);
    if(valid.error){
        return res.status(400).send(valid.error.details);
    }

    var duplicateUser = await User.findOne({
        email : body.email
    })

    if(duplicateUser){
        return res.status(403).send({
            message: `Ususario con email ${body.email} ya esta registrado`
        })
    }

    var nuevoUser = new User(body);
    // el username es correo codificado (token)
    nuevoUser.username = Utils.encodeEmail(nuevoUser.email);
    // agrego informacion a los permios
    nuevoUser.permissions = {
        admin: false,
        regular: true,
        enabled: false
    };


    await nuevoUser.save();

    res.send({
        status: "User Created",
        user: body
        });
});

//
module.exports=router;