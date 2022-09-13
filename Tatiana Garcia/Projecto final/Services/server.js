
const mongoose = require('mongoose');
const DB = "DSStore2022";
const MongoUser = require("D:\\MongoUSer\\user.json")
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
                name: 'Zildjian'
            });
            kitty.save().then(() => console.log('meow'));
        }
    });