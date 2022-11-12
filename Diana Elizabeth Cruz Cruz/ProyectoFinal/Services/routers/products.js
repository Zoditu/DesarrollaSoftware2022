const express = require('express');
const router = express.Router();

const Category = require('../models/product');



router.get('/recommended'), async function(req, res){
    var products =await Product.find({}, {_id:0, _v: 0}).sort
}

router.post('/:sku', async function(req, res){

});

router.get('/all', async function(req, res){
    var query = req.query;

    var filter = {};
    if(!isNaN (query.category)){
        filter.categoryId = query.category;
        
        if(!isNaN(query.subCategory)){
            filter.subCategoryId = query.subCategory;
           
            if(query.categoryType){
                filter.categoryType = 
                {$regex: query.name,
                $options: "i"}
            }
        }
    }

    if(query.name){
        filter.name = {
            $regex: query.name,
            $options: "i"
        };
    }
   
    if(query.model){
        filter.model = {
            $regex: query.model,
            $options: "i"
        };
    }

    if(query.color){
        filter.color = {
            $regex: query.color,
            $options: "i"
        };
    }

    if(query.price){
       const range = query.price.split(',');
       if(range.length === 2){
        var min = range[0].trim();
        var max = range[1].trim();

        //AMbos deben de ser números
        if(!NaN(min) && !isNaN(max)){
            min = parseFloat(min);
            max = parseFloat(max);
            //0,100
            if(min > max){
            var swap = min;
            min = max;
            max = swap;
            }

            filter.price = {$gte: min, $lte: max};

            }

        }
       }
        
    }

    
    var products = await Product.find(filter);

    var page = startPage;
    if(!isNaN(query.page)){
        var page = parseInt(query.page);
    }

    var indexProducts = (page - 1) * maxLimit;
    var result = products.splice(indexProducts, maxLimit);
 
    return res.send = (result);
})

router.get('/countPages', async function(req,res){
    var pages = await Product.count();

    return res.send ({
        count: Math.ceil(pages/maxLimit)
    });
}
)

module.exports = router;