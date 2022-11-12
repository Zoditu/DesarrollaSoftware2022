const mongoose = require('mongoose');                    //instalacion de mongoose en la terminal
const DB = "DSStore2022";                                  //constante de la base de datos
const MongoUser = require("../../../../../MongoUsers/user.json");               
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

const express = require('express');
const cookieParser = require('cookie-parser');     //para rescatar y leer las cookies
const app = express();
const port = 3000;
// express.static permite navegar en páginas web (pág. estáticas, js, html, css) que estan en la carpeta sites y llamadas a routers
app.use(express.static('../sites'));  //sites. carpeta raiz para pag. web HTML
app.use(express.json());              // usamos json
app.use(cookieParser());

app.get('/', function(req, res) {        
  res.status(301).redirect('/home');    // esta línea sirve para redireccionar al HOME al hacer un GET nos lleva al HTML
}
);

/*app.get('/', function(req, res) {           //endpoint vacío ('/')para comprobar que esta corriendo el servidor y funciona
    res.send({
        status: "online"
    });
});*/
const usersRouter = require('./routers/users');
app.use('/users', usersRouter);

const categoriesRouter = require('./routers/categories');  //agregados el router de las categorias del producto
app.use('/category', categoriesRouter);     // se va a usar en todos los endpointe donde tengamos category
//como lo que se cree en  http://localhost:3000/category/

// const usersRouter = require('./routers/users');     
// app.use('/users', usersRouter);
// //http://localhost:3000/users/prueba -> GET

//creamos el endpoint de products y del router traemos product, 
const productsRouter = require('./routers/products');
// a la aplicación de express le decimos que utilice el endpoint /products y lo redireccione al Router de productos. 
app.use('/products', productsRouter);
//locahost:3000/products/

const cartsRouter = require('./routers/carts');
app.use('/cart', cartsRouter);

const ordersRouter = require('./routers/orders');
app.use('/orders', ordersRouter);

mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Conectado a la base de datos');

            app.listen(port, function() {
                console.log(`Servidor corriendo en http://localhost:${port}`);
        });
        //     const Cat = mongoose.model('Cat', {
        //         name: String
        //     });

        //     const kitty = new Cat({
        //         name: 'Zildjian'
        //     });
        //     kitty.save().then(() => console.log('meow'));
    }
    });
