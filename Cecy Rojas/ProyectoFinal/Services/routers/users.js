const express = require('express');
const router = express.Router();

const User = require ('../models/user');

//Crear todos los endpoints relacionados a /users
router.get('/prueba', function(req, res){
    res.send({
        prueba: "Ok /users/prueba"
    });
});

router.post('/register', async function(req, res){
    var nuevoUser = new User({
        name: "Cecy",
        lasName: "Rojas Castro",
        username: "Ing. Rojas",
        permissions: {
            admin: true
        }
    });

    await nuevoUser.save();

    res.send({
        status: "Created",
        user: nuevoUser
    });
});

module.exports = router;
