onst express = require('express');
const router = express.Router();

const User = require('../models/user');
const Validate = require('../validation');

//Crear todos los endpoints relacionados a /users
router.get('/prueba', function(req, res){
    res.send({
        prueba: "OK /users/prueba"
    });
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

    await nuevoUser.save();

    res.send({
        status: "Created",
        user: body
    });
});

module.exports = router;