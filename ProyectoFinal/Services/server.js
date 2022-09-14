const mongoose = require('mongoose');
const DB = "DSStore2022";
const MongoUser = require("../../../MongoUsers/user.json");
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('../../'));
app.use(express.json());

/*app.get('/', function(req, res) {
    res.send({
        status: "online"
    });
});*/
const usersRouter = require('./routers/users');
app.use('/users', usersRouter);
//http://localhost:3000/users/prueba -> GET

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