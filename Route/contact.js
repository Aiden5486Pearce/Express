const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const productsController = require('../controler/product');
const router = express.Router();

router.get('/contactUs', productsController.contactGetProducts );
router.post('/contactUs', productsController.contactPostProducts);

module.exports = router;
