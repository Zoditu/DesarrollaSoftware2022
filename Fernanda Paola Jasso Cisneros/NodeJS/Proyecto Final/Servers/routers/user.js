const express = require('express');
const router = express.Router();

const User = require('../models/usermodels');
const Validate = require('../validation');

//CREAR LOS ENDPOINTS RELACIONADOS. Debe eliminarse
/*router.get('/prueba', function(req, res){
    res.send({
        prueba: "OK /users/prueba"
    });
});*/

router.get('/profile', async function(req, res){
    var cookies = req.cookies;

    var SID = cookies["SID"]; //representa al id del user
    var TOKEN = cookies["TOKEN"]; //la sesión con la que entras

    if(!SID || !TOKEN){
        return res.status(400).send({
            message: 'Missing cookies SID 1 TOKEN'
        });
    }

    var user = await User.findOne({
        username: SID
    });

    if(!user){ //RETURN para breaking point cuando solo hay if
        return res.status(404).send({
            message: 'Invalid username or password'
        });
    }

    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true){
        return res.send({
            message: "Valid session",
            user: user
        });
    } else {
        return res.status(401).send({
            message: "Invalid token session"
        });
    }
});

router.post('/login', async function(req, res){
    var loginData = req.body;
    var validLogin = Validate.userLogin(loginData);
    if(validLogin.error){
        return res.status(400).send(validLogin.error.details);
    }

    var user = await User.findOne({
        email: loginData.email,
        password: loginData.password
    });

    if(!user){
        return res.status(404).send({
            message: `Invalid email or password`
        });
    }

    if(!user.sessions){
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
        SID: user.username,
        TOKEN: token
    });
});

router.post('/register', async function(req, res){
    
    var body = req.body;

    var validUser = Validate.userRegister(body);
    if(validUser.error){
        return res.status(400).send(validUser.error.details);
    }

    var userDuplicate = await User.findOne({
        email: body.email
    });
    if(userDuplicate){
        return res.status(403).send({
            message: `Email is already taken ${body.email}`
        });
    }

    var nuevoUser = new User(body);
    
    

    await nuevoUser.save();

    res.send({
        status: "Created",
        user: nuevoUser
    });
});

module.exports = router;