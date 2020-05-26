const { productService }=require('../../services');
const {dataBase} =require('../../models/product-model')

module.exports = {

    getAllProduct: async (req, res) => {
        let product = await productService.getAllProduct();
        await res.json(product);
    },

    getAllProductById: async (req, res) => {
        const id = req.params.id;
        const product = productService.getProductById(id);
        await res.json(product.name);
    },

    deleteProduct: async (req, res) => {
        const product = req.params.name;
        const a = await productService.deleteProduct(product);
        await res.json(a);

    },

    createProduct: async  (req, res) => {
        const {name} = req.query;
        let newListProduct = await productService.createProduct(name);
        await res.json(newListProduct);
    }

};
