const mongoose = require('mongoose');
const DB = "DSStore2022";
const MongoUser = require("C:\\Users\\oscar\\OneDrive\\Documentos\\GitHub\\MongoUsers\\user.json");
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.static('C:\\Users\\oscar\\OneDrive\\Documentos\\GitHub\\DesarrollaSoftware2022\\Diana Elizabeth Cruz Cruz\\ProyectoFinal\\Services\\sites'));
app.use(express.json());
app.use(cookieParser());

/*app.get('/', function(req,res){
    res.send({
        status: "online"
    });
});*/

app.get('/', function(req, res) {
    res.status(301).redirect('./home');
});

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