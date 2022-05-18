const path = require('path');
const rootDir = require('../util/path');
const products = [];
exports.getAddProduct = (req, res, next) => {
    console.log('Hi there');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
};

exports.contactGetProducts = (req,res,next)=>{
    console.log('SignIn first');
    res.sendFile(path.join(rootDir,'views','contact.html'));
    
};

exports.contactPostProducts =(req,res,next)=>{
    products.push({title: req.body.title});
    res.redirect('/success');
}

exports.successMsg = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
};
