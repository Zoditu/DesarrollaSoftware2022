const mongoose = require('mongoose');
const DB = "DSStore2022";
const MongoUser = require("../../../MongoUsers/user.json");
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
//locahost:3000/category/

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