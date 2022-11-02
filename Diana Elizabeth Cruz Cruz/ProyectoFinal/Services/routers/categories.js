const express = require('express');
const router = express.Router();

const Category = require('../models/category');
const SubCategory = require('../models/subcategory');

router.get('/all', async function(req, res){
    var categories = Category.find({},{});
    var result = [];

    for(var i = 0; i < categories.length; i++){
        const category = categories[i];
        var Subcategories = await SubCategory.find({parentCategory: category.id});
        result.push({
            category: category,
            children: Subcategories
        });
    }

    return res.send(result);
});

module.exports = router;