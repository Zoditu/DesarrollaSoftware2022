const mongoose = require('mongoose');
const DB = "DSStore2022";
const MongoUser = require("D:\\MongoUSer\\user.json")
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static('../sites'));
app.use(express.json());
app.use(cookieParser());

app.get('/', function(req, res) {
     res.status(301).redirect('/home');
});

const usersRouter = require('./routers/users');
app.use('/users', usersRouter);

const categoriesRouter = require('./routers/categories');
app.use('/category', categoriesRouter);

const productsRouter = require('./routers/products');
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
            /*const Cat = mongoose.model('Cat', {
                name: String
            });

            const kitty = new Cat({
                name: 'Zildjian'
            });
            kitty.save().then(() => console.log('meow'));*/
        }
    });