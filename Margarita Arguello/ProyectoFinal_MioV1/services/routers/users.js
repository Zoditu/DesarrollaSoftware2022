const express = require('express');
//const { validate } = require('../models/user');
const router=express.Router();

const User = require('../models/user');
const Utils = require('../utils');
const Validate = require('../validation')

async function ValidUser(SID, TOKEN) {
    const result = {
        valid: false,
        tokenValid: false,
        user: null
    };

    var user = await User.findOne({
        username: SID
    });

    if(!user) {
        result.valid = false;
        return result;
    } else {
        result.valid = true;
    }

    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        result.tokenValid = true;
        result.user = user;
    }

    return result;
}


/*
router.get('/prueba',function(req,res){
    res.send({
        prueba: "ok /users/prueba"
    });
});
*/

//Crear todos los endpoints relacionados al profile

router.get('/profile', async function(req, res){
    var cookies = req.cookies;
    var SID = cookies['SID'];
    var TOKEN = cookies['TOKEN'];

    

 // si ya se hizo loggin una vez debe tener SID y Token   
    if(!SID || !TOKEN){
        return res.status(400).send({
            message: 'Falta cookies SID o TOKEN'});
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
        phone: 1,
        address: 1,
        orders: 1,
        sessions: 1
        });

// si no encentras el usuario
    if (!user){
        return res.status(404).send({
            message: 'Usuario Invalido'
        });
    }

    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        var _user = user.toObject();
        delete _user.sessions;

        if(!_user.address) {
            _user.address = {};
        }

        res.send({
            message: "Sesion Valida",
            user: _user
        });
    } else {
        res.status(401).send({
            message: "Sesion Invalida "
        });
    }
});

// endpoint del profile
router.put('/profile', async function(req, res){
    var cookies = req.cookies;

    var SID = cookies["SID"];
    var TOKEN = cookies["TOKEN"];

    if(!SID || !TOKEN) {
        res.clearCookie("SID");
        res.clearCookie("TOKEN");

        return res.status(400).send({
            message: `Missing cookies SID | TOKEN`
        });
    }

    var result = await ValidUser(SID, TOKEN);
    if(!result.valid) {
        res.clearCookie("SID");
        res.clearCookie("TOKEN");

        return res.status(404).send({
            message: `Invalid username.`
        });
    } else if(result.valid && !result.tokenValid) {
        res.clearCookie("SID");
        res.clearCookie("TOKEN");

        return res.status(401).send({
            message: "Invalid token session"
        });
    }

    var updateData = req.body;
    var valid = Validate.userUpdate(updateData);
    if(valid.error) {
        return res.status(400).send({
            message: "Error: Datos inválidos del usuario",
            details: valid.error.details
        });
    }

    var keys = Object.keys(updateData);
    for (var i = 0; i < keys.length; i++) {
        const property = keys[i];

        switch(property) {
            case "name":
                result.user.name = updateData[property];
            break;

            case "lastName":
                result.user.lastName = updateData[property];
            break;

            case "phone":
                result.user.phone = updateData[property];
            break;

            case "address":
                result.user.address = updateData[property];
                await result.user.markModified('address');
            break;
        }
    }

    await result.user.save();
    
    var _user = result.user.toObject();
    delete _user._id;
    delete _user.__v;
    delete _user.username;
    delete _user.password;
    delete _user.cartId;
    delete _user.permissions;
    delete _user.sessions;

    return res.send(_user);

});


// Crear los endpoint relacionados a login
router.post('/login', async function(req, res){
// optengo los datos del body
    var loginData=req.body;
// valido los datos    
    var valid=Validate.userLogin(loginData);

    if(valid.error){
        return res.status(400).send({
            message: "Error: Email Invalido",
            details: valid.error.details
        });
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
        status: "Usuario Creado",
        user: body
        });
});

// endopont de logout
router.get('/logout', async function(req, res){
    var cookies = req.cookies;
    var SID = cookies["SID"];
    var TOKEN = cookies["TOKEN"];

    if(SID && TOKEN) {
        var user = await User.findOne({ username: SID });

        if(user) {
            if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
                //delete cookies
                user.sessions[TOKEN].logged = false;
                await user.markModified('sessions');
                await user.save();
            }
        }

        res.clearCookie("SID");
        res.clearCookie("TOKEN");
        res.clearCookie("CARTID");
        return res.status(301).redirect('/home');
    }
});

module.exports=router;