const {Router} = require('express');
const router = Router();
const {dataBase, Product} = require('../../models/product-model')

const {productController} = require('../../controller');
const {productMiddleware,productMiddlewareID}= require('../../middleware');


router.get('/',productController.getAllProduct);

router.get('/:id',productMiddlewareID,productController.getAllProductById);


router.delete('/:name', productController.deleteProduct);


router.post(`/new_product`,productMiddleware,productController.createProduct);   //new_product?name=name

// з update поки не получаэться, пробую

module.exports = router;
