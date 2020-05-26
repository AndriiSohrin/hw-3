const {Router} = require('express');
const router = Router();

const {productController} = require('../../controller');
const {productMiddleware,productUpdateMiddleware}= require('../../middleware');


router.get('/',productController.getAllProduct);

router.get('/:id',productController.getAllProductById);

router.delete('/:name', productController.deleteProduct);

router.post(`/product`,productMiddleware,productController.createProduct);   //product?name=name&price=price

router.put('/',productUpdateMiddleware,productController.updateProduct); //



module.exports = router;
