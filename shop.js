
const path = require('path');
const express = require('express');
//const rootDir = require('../util/path');
const productsController = require('../controler/product');
const router = express.Router();

router.get('/', productsController.getProducts);

/*router.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});*/

module.exports = router;

