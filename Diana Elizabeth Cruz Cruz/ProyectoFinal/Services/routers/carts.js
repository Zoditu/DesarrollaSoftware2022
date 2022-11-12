const express = require('express');
const router = express.Router();

const Validate = require('../validation');
const Cart = require('../models/cart');
const User = require('../models/User');
const Utils = require('../models/Utils');




if(!SID || !TOKEN){
    if(CARTID){
        //recuperar la referencia a este carrito
        var restoredCart = await Cart.findOne({id: CARTID},{
        _id:0,
        __v:0,
        username: 0 
    })
    } else{
        //crear uno nuevo vacio y mandar este
        var emptyAnnonCart = new Cart(cart);
        await emptyAnnonCart.save;
    }

    var emptyAnnonCart = new Cart ()
    res.clearCookie("SID");
    res.clearCookie("TOKEN");
    res.clearCookie("CARTID", cartid);


    await emptyAnnonCart.save();
    return res.send(cart);
}

if(user.sessions && user.sessions[TOKEN] && user.sessions[TOKEN].logged === true) {
        
    cart = await Cart.findOne({username: SID},
        {_id:0,
        __v:0,
        username: 0} )
} else {
    res.status(401).send({
        message: "Invalid token session"
    });
}

if (cart){
    //merge
    var prevCart = await Cart.findOne({id: CARTID});
    if (prevCart){
        //merge
        for(var i = 0; i< prevCart.products.length; i++){
            const product = prevCart.products[i];

            for(var j = 0; j< cart.products.length; j++){
                const cartProduct = cart.products[j];

                if(products.sku == cartProduct){
                    cartProduct.amount += product.amount;
                }
                
            }
        }
    }
    {

    }

}


module.exports = router;