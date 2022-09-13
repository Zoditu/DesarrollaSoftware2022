const express = require(`express`);
const router = express.Router();

//crear enpoints de /users

router.get(`/prueba`, function(req, res){
    res.send({
        prueba: "OK, users/prueba"
    });
};

module.exports = router;