//npm install init --> inicializar el proyecto
// crea los archivos .json

//npm insall mongoose --> instalar los controladores de la BD 
// BD a usar mongoose
const mongoose = require('mongoose');
const BD="DSStore";
// user.json contiene las credenciales para acceder a la BD

const MongoUser=require("C:\\Users\\Fam Cas Arg\\Documents\\Margarita\\user.json");
//const MongoUser = require("../../../MongoUsers/user.json");
// la direccion para acceder a la BD
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${BD}?retryWrites=true&w=majority`;

// npm insall express --> permite hacer los servicios
// ruters, get, post, delete, put, patch
const express = require('express');
// npm install cookie-parser --> permite usar las cookies
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
//const port = 3000;

//app.use(express.static('../../'));
app.use(express.static('./sites'));
app.use(express.json());
app.use(cookieParser());

// esta es para redireccionar al home
app.get('/', function(req,res){
    res.status(301).redirect('/home');
});

// usuarios
const usersRouter = require('./routers/users');
app.use('/users',usersRouter);

// categorias
const categoriesRouter = require('./routers/categories');
app.use('/category', categoriesRouter);

// productos
const productsRouter = require('./routers/products');
app.use('/products', productsRouter);

// carrito de compras
const cartsRouter = require('./routers/carts');
app.use('/cart', cartsRouter);

// carrito de compras
const ordersRouter = require('./routers/orders');
app.use('/orders', ordersRouter);

// para conectarse a la BD mongoose
mongoose.connect(
    uri, 
    { useNewUrlParser: true, 
      useUnifiedTopology: true 
    },
    err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Conectado a la Base de Datos');
            app.listen(port, function() {
                console.log(`Servidor corriendo en http://localhost:${port}`);
            });

        }
    });

   