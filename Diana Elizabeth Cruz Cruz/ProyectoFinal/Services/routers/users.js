const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Utils = require('../utils');
const Validate = require('../validation');

//Crear todos los endpoints relacionados a /users
router.get('/prueba', function(req, res){
    res.send({
        prueba: "OK /users/prueba"
    });
});
/*app.get('/', function(req,res){
    res.status(301).redirect('/home');
});*/

router.get('/profile', async function(req, res) {
    var cookies = req.cookies;

    var SID = cookies["SID"];
    var TOKEN = cookies["TOKEN"];

    if(!SID || !TOKEN) {
        return res.status(400).send({
            message: `Missing cookies SID | TOKEN`
        });
    }

    var validUser = await validUser(SID, TOKEN);

    var user = await User.findOne({
        username: SID
    }, {
        _id: 0,
        name: 1,
        lastName: 1,
        email: 1,
        orders: 1,
        sessions: 1
    });

    if(!user) {
        return res.status(404).send({
            message: `Invalid username.`
        });
    }

    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        
        var _user = user.toObject();
        delete _user.sessions;

        res.send({
            message: "Valid session",
            user: _user
        });
    } else {
        res.status(401).send({
            message: "Invalid token session"
        });
    }
});

router.post('/login', async function(req, res) {
    var loginData = req.body;
    var valid = Validate.userLogin(loginData);
    if(valid.error) {
        return res.status(400).send({
            message: "Error: Invalid Email",
            details: valid.error.details
        });
    }

    var user = await User.findOne({ 
        email: loginData.email,
        password: loginData.password
    });

    if(!user) {
        return res.status(404).send({
            message: `Invalid email/or password.`
        });
    }

    if(!user.sessions) {
        user.sessions = {};
    }

    const token = Utils.generateToken(user.email);
    user.sessions[token] = {
        logged: true,
        date: new Date()
    }

    user.markModified("sessions");
    await user.save();

    res.cookie("SID", user.username);
    res.cookie("TOKEN", token);

    res.send({
        login: "ok"
    });
    /*res.send({
        SID: user.username,
        TOKEN: token
    });*/
});

router.post('/register', async function(req, res){
    
    var body = req.body;
    var valid = Validate.userRegister(body);
    if(valid.error) {
        return res.status(400).send(valid.error.details);
    }

    var duplicatedUser = await User.findOne({
        email: body.email
    });

    if(duplicatedUser) {
        return res.status(403).send({
            message: `El usuario con el email '${body.email}' ya se encuentra registrado`
        });
    }
    
    var nuevoUser = new User(body);
    nuevoUser.username = Utils.encodeEmail(nuevoUser.email);
    nuevoUser.permissions = {
        admin: false,
        regular: true,
        enabled: false
    };

   /* var nuevoUser = new User({
        name:"Diana",
        lastNAme:"Cruz",
        username: "dnacrz",
        permissions: {
            admin: true
        }
    });*/
    

    await nuevoUser.save();

    res.send({
        status: "Created",
        user: body
    });

    var updateData = req.body;
    var keys = Object.keys(updateData);

    for (var i = 0; i< keys.length; i++){
        const element = keys[i];
    
            switch (property){
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
                    result.user.address=[property];
                    await result.user.markModified('address');
                    break;
            }
    }

    await result.user.save();
    var _user = result.user.toObject();
    delete _user._id;
    delete _user._v;
    delete _user.userName;
    delete _user.password;
    delete _user.cartId;
    delete _user.permissions;
    delete _user.sessions;


    return res.send(_user);
});

module.exports = router;