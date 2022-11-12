const express = require('express');
const router = express.Router();

const Category = require('../models/categorymodels');
const SubCategory = require('../models/subcatmodels');

router.get('/all', async function(req, res){
    var categories = await Category.find({}, {_id: 0, __v: 0});
    var result = [];

    for(var i = 0; i <categories.length; i++){
        const category = categories[i];
        var subcategories = await SubCategory.find({parentCategory: category.id}, {_id: 0, __v: 0});
        result.push({
            category: category,
            children: subcategories
        });
    }

    return res.send(result);
});

module.exports = router;