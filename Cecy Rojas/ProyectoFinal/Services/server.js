const mongoose = require('mongoose');
const DB = "Baloc";
const MongoUser = require("C:\\MongoUsers\\user.json");
const uri = `mongodb+srv://${MongoUser.user}:${MongoUser.password}@${MongoUser.server}/${DB}?retryWrites=true&w=majority`;

mongoose.connect(
    uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Conectado :)');
            const Cat = mongoose.model('Cat', {
                name: String
            });

            const kitty = new Cat({
                name: 'Gatito'
            });
            kitty.save().then(() => console.log('meow'));
        }
    });