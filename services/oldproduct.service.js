const {dataBase, Product} = require('../models/product-model')

class ProductService {

    getAllProduct() {
        return dataBase
    }

    getProductById(id) {
        return dataBase.find(el => el.id === id);
    }

    deleteProduct(product) {
        return dataBase.filter(el => el.name !== product);
    }

    createProduct(name, price) {
        const id = (dataBase.length + 1).toString();

        const newProduct = new Product(id, name, price);
        dataBase.push(newProduct);
        return dataBase
    }

    updateProduct(name, newPrice) {
        let updateData = [];

        dataBase.map(el => {

            if (el.name === name) {
                el.price = newPrice;
                updateData.push(el)
            }
            return updateData
        })
    }


}

module.exports = new ProductService;
