const mongoose = require('mongoose');
const DB = "DSStore2022";
const MongoUser = require("./MongoUser/user.json");
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

const express = require('express');
const cookieParser = require('cookie-parser'); //Leer las cookies con una petición
const app = express();
const port = 3000;

app.use(express.static('../../'));
app.use(express.json());
app.use(cookieParser());

/*app.get('/', function(req,res){
  res.send({
    status: "online"
  });
});*/

const usersRouter = require('./routers/user');
app.use('/users', usersRouter);

mongoose.connect(
  uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if(err){
      console.log(err);
    } else {
      console.log('Conectado a la base de datos');
      app.listen(port, function() {
        console.log(`Servidor corriendo en http://localhost:${port}`);
      });
    }
  });
