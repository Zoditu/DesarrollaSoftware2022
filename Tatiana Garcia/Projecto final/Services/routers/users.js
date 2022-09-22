const express = require(`express`);
const { PromiseProvider } = require('mongoose');
const router = express.Router();

const User = require('../models/user');
const Utils = require ('../utils');
const { userRegister } = require('../validation');
const Validate = require('../validation');

//crear enpoints de /users

/*router.get(`/prueba`, function(req, res){
    res.send({
        prueba: "OK, users/prueba"
    });
});*/

router.get('/profile', async function (req, res){
    var cookie = req.cookies;

    var SID = cookies["SID"];
    var TOKEN = cookies["TOKEN"];

    if(!SID || !TOKEN) {
        return res.status(400).send({
            message:'Missing cookie SID | TOKEN'
        })
    }

    var user = await User.findOne({
        username: SID
    },{
        _id: 0,
        name: 1,
        lastName: 1,
        email: 1,
        orders: 1,
        sessions: 1
    });

    if (!user){
        return res.status(404).send({
            message: 'Invalid usrename.'
        });
    }

    if(user.sessions && user.sessions[TOKEN].logged === true){

        var _user= user.toObject();
        delete _user.sessions;

        res.send({
            message: "Valid session",
            user: _user
        });
    } else {
        res.status(401).send({
            message:"Invalid token session"
        });
    }
});

router.post('/login', async function(req, res) {
    var loginData = req.body;
    var valid = Validate.userLogin(loginData);
    if(valid.error) {
        return res.status(400).send(valid.error.details);
    }

    var user = await User.findOne({
        email: loginData.email,
        password: loginData.password
    });

    if(!user){
        return res.status(404).send({
            message: `Usuario/contraseña invalidos`
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

   /* res.send({
        SID: user.username,
        TOKEN: token
    })*/

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
    nuevoUser.username = Utils.encodeEmail(nuevoUser.email);
    nuevoUser.permissions = {
        admin: false,
        regular: true,
        enabled: false
    };

    await nuevoUser.save();

    res.send({
        status: "Created",
        user: body
    })
})

module.exports = router;