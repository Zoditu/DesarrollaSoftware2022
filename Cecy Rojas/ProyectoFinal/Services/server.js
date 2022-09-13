
const { MongoClient, ServerApiVersion } = require('mongodb');
const MongoUser = require("C:\\MongoUsers\\user.json")

const uri =`mongodb+srv://${MongoUser.user}:${MongoUser.password}@cluster0.dc05g7j.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    if(err){
        console.log(err);
    } else {
        console.log('Conectado :)');
    
    }
});