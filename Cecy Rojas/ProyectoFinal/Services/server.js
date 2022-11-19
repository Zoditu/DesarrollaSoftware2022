
const mongoose = require('mongoose');
const DB = "Baloc";
const MongoUser = require("C:\\MongoUsers\\user.json");
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

mongoose.connect(
    uri, 
    { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },
    err => {
        if(err) {
            console.log(err);
        } else{
            console.log('Conectado :)');
    }
});
