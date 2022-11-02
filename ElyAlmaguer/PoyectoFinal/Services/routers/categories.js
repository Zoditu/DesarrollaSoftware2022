const express = require('express');   //importamos express
const router = express.Router();      //creamos un router de express

const Category = require('../models/category');
const SubCategory = require('../models/subcategory');

router.get('/all', async function(req, res){     //nos traemos todas las categorias
    var categories = await Category.find({}, {_id: 0, __v: 0});
    var result = [];

    for(var i = 0; i < categories.length; i++) {   //recorremos cada categoria y buscamos las que tengan subcategorya (por el parent 'id')
        const category = categories[i];
        var subcategories = await SubCategory.find({ parentCategory: category.id }, {_id: 0, __v: 0});  //quitamos los campos de _id y __v con la proyeción.
        result.push({
            category: category,
            children: subcategories
        });
    }

    return res.send(result);
});

module.exports = router;

//se agrega al server, la const del router.