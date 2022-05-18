const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const productsController = require('../controler/product');
const router = express.Router();

router.get('/success', productsController.successMsg);

module.exports = router;
