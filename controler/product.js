const products = [];
exports.getAddProduct = (req, res, next) => {
    console.log('Hi from here');
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.render('shop', {
        prod: products,
        pageTitle: 'Shop',
        path: '/'
    });
};
