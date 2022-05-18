const path = require('path');
const express = require('express');
//const rootDir = require('../util/path');
const productsController = require('../controler/product');
const router = express.Router();
//const product = express.product;

router.get('/add-product', productsController.getAddProduct);
/*router.get('/add-product', (req,res,next)=>{
    console.log('Hi from here');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
    
});*/

router.post('/add-product', productsController.postAddProduct);

module.exports = router;
//exports.product = product;
