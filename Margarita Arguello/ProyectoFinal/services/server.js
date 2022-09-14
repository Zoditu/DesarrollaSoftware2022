
const mongoose = require('mongoose');
const BD="DSStore";
const MongoUser=require("C:\\Users\\Fam Cas Arg\\Documents\\Margarita\\user.json");

const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${BD}?retryWrites=true&w=majority`;



mongoose.connect(
    uri, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Conectado');
            const Cat = mongoose.model('Cat', { name: String });

            const kitty = new Cat({ name: 'Zildjian' });
            kitty.save().then(() => console.log('meow'));
        
        }
    });

   