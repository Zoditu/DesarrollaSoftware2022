const mongoose = require('mongoose');
const DB = "Baloc";
const MongoUser = require("C:\\MongoUsers\\user.json");
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

const express = require('express');
const app = (express);
const port = 3000;

app.use(express.static('../../'));
app.use(express.json());

mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Conectado a la BD de Baloc');
            app.listen(port, function () {
                console.log(`Servidor corriendo en https://localhost:${port}`);
            }); 
            /*const Cat = mongoose.model('Cat', {
                name: String
            });

            const kitty = new Cat({
                name: 'Gatito'
            });
            kitty.save().then(() => console.log('meow'));*/
        }
    });