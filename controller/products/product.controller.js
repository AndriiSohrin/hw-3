const {productService} = require('../../services');


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

        const filterProduct = await productService.deleteProduct(product);
        await res.json(filterProduct);

    },

    createProduct: async (req, res) => {
        const {name, price} = req.body;

        let newListProduct = await productService.createProduct(name, price);
        await res.json(newListProduct);
    },

    updateProduct: async (req, res) => {
        const {name, price} = req.query;

        const updateProduct = await productService.updateProduct(name, price);
        await res.json(updateProduct)
    }

};
