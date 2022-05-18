const path =require('path');
const http = require('http');
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

//const port = 3000;
const app = express();
//app.set('view engine', 'ejs');
//app.set('views', 'views');
const adminRoute = require('./Route/admin');
const shopRoute = require('./Route/shop');
const contactRoute = require('./Route/contact');
const successRoute = require('./Route/success');
//const productControler = require('./controler/product');

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoute);
app.use('/admin',adminRoute);
//app.use('/admin',contactRoute);
//app.use(successRoute);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});


app.listen(3000);
