const express = require('express');


const productRoutes = require('./routes/products/product.router');


const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(productRoutes);


app.listen(3002, ()=> {
    console.log('server has been started')
});


