const express = require('express');
const router = express.Router();
//para crear y modificar usuarios del user.js
const User = require('../models/user');
const Utils = require('../utils');
const Validate = require('../validation');

async function ValidUser(SID, TOKEN) {
    const result = {
        valid: false,
        tokenValid: false,
        user: null
    };
// buscar un usuario que tenga el valor del SID
    var user = await User.findOne({
        username: SID
    });

    if(!user) {
        result.valid = false;
        return result;
    } else {
        result.valid = true;
    }
// si el usuario tiene sesiones y si existe el token de la sesion y  si la sesión está activa.
    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        result.tokenValid = true;
        result.user = user;
    }

    return result;
}

//Crear todos los endpoints relacionados a /users
/*router.get('/prueba', function(req, res){
    res.send({
        prueba: "OK /users/prueba"
    });
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
// buscar un usuario que tenga el valor del SID
    var user = await User.findOne({
        username: SID
// eliminamos la información sencible. esto sería el perfil o profile.        
    }, {
        _id: 0,
        name: 1,
        lastName: 1,
        email: 1,
        phone: 1,
        address: 1,
        orders: 1,
        sessions: 1
    });

    if(!user) {
        return res.status(404).send({
            message: `Invalid username.`
        });
    }
// si el usuario tiene sesiones y si existe el token de la sesion y  si la sesión está activa.
    if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        
        var _user = user.toObject();   //hacemos copia del objeto con el .toObject
        delete _user.sessions;         //borramos la propiedad de sessions

        if(!_user.address) {
            _user.address = {};
        }

        res.send({
            message: "Valid session",
            user: _user
        });
  //si el token es invalido       
    } else {
        res.status(401).send({
            message: "Invalid token session"
        });
    }
});
// ESTO ES PARA HACER EL LOGIN
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
 //los datos del usuario se cambian al body   
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
    });
});

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

module.exports = router;     //para exportar el router

// ---------------------------------------------
// const express = require('express');
// const router = express.Router();                      
// //para crear y modificar usuarios del user.js
// const User = require('../models/user');   
// const Utils = require('../utils');
// const Validate = require('../validation');
// //Crear todos los endpoints relacionados a /users   
// //Plantilla: se necesita para que funcione, api, metodo y funcion, 
// // router.get('/prueba', function(req, res){
// //     res.send({
// //         prueba:"Ok/users/prueba"
// //     });
// // });   
// router.get('/profile', async function(req, res) {
//     var cookies = req.cookies;
    
//     var SID = cookies["SID"];
//     var TOKEN = cookies["TOKEN"];
    
//     if(!SID || !TOKEN) {
//         return res.status(400).send({
//             message: `Missing cookies SID | TOKEN`
//         });
//     }
// // buscar un usuario que tenga el valor del SID
//         var user = await User.findOne({
//             username: SID
// // eliminamos la información sencible. esto sería el perfil o profile.
//         }, {  
//              _id: 0,
//             name: 1,
//             lastName: 1,
//             email: 1,
//             orders: 1,
//             sessions: 1
//         });
//     if(!user) {
//     return res.status(404).send({
//         message: `Invalid username.`
//     });
// }
// // si el usuario tiene sesiones y si existe el token de la sesion y  si la sesión está activa.
//     if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {        
            
//         var _user = user.toObject();       //hacemos copia del objeto con el .toObject
//         delete _user.sessions;             //borramos la propiedad de sessions
         
//         res.send({
//             message: `Valid session`,
//             user: _user
//     });
//     //si el token es invalido
// } else {
//         res.status(401).send({
//             message: `Invalid token session`
//     });
// }
// });

// // ESTO ES PARA HACER EL LOGIN
// router.post('/login', async function(req, res) {
//     var loginData = req.body;
//     var valid = Validate.userLogin(loginData);
//     if(valid.error) {
//         return res.status(400).send({
//             message: "Error: Invalid Email",
//             details: valid.error.details
//         });
//     }
// //para buscar el usuario    
//     var user = await User.findOne({     
//         emai:loginData.email,
//         password: loginData.password
//     });
// // si no, encontró el usuario... retorna un mensaje email o passwor invalido.
//     if(!user){                    
//         return res.status(404).send({  
//             message:`Invalid email/or password.`
//         });
//     }
// //creamos las sesion si no tiene una antes, aquí reasignamos una propiedad    
//     if(!user.sessions){                
//         user.sessions = {};
//     }
//     const token = Utils.generateToken(user.email);
//     user.sessions[token] = {
//           logged: true,
//           date: new Date()
//     }
// //mongo cuando marcas modificado es cuando lo reasignas, cuando tenemos una propiedad con espacio podemos añadir la propiedad entre []
// // prop.espacio = ["Propiedad con espacio o caracteres especiales (=,+,etc"] = a prop[""]
// //para que agregue las sesiones 
//     user.markModified("sessions");

// //salvar la inform de sesiones.        
//     await user.save();                

//      res.cookie("SID", user.username);
//      res.cookie("TOKEN", token);

// // user.sessions[Utils.generateToken(user.email)]= {
// //     logged: true,                   //token de sesión
// //     date: new Date()                //fecha del login
// //}
//         res.send({
//         login: "ok"
//   });
// // esto es solo para checar el token y sid en YARC
//     // res.send({
//     //     SID: user.username,
//     //     TOKEN: token
// //});
// });
// // información del usuario se llama con GET y valor de las cookies en el custom headers de YARC 
// // para ver el PERFIL O PROFILE a traves de las cookies

//   // ESTO ES PARA HACER EL REGISTRO DEL USUARIO
// router.post('/register', async function(req, res){
        
//         var body = req.body;
//         var valid = Validate.userRegister(body);    //validar el usuario
//     if(valid.error) {
//         return res.status(400).send(valid.error.details);
//     }
//         var duplicatedUser = await User.findOne({    //buscamos duplicados
//              email: body.email
//         });

//     if(duplicatedUser) {
//          return res.status(403).send({
//              message: `El usuario con el email '${body.email}' ya se encuentra registrado`
//          });
//     }

// //los datos del usuario se cambian al body
//         var nuevoUser = new User(body);
//         nuevoUser.username = Utils.encodeEmail(nuevoUser.email);       //token único
//         nuevoUser.permissions = {
//             admin: false,
//             regular: true,
//             enabled: false
//         };

//     await nuevoUser.save();

//     res.send({
//         status:"Created",
//         user: body
//     });
// });

// module.exports = router;                  //para exportar el router
