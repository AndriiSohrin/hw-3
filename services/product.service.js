const {dataBase,Product} = require('../models/product-model')

class ProductService {

    getAllProduct(){
        return dataBase
    }

    getProductById(id) {
        return dataBase.find(el => el.id === id);
    }

    deleteProduct(product){
        return dataBase.filter(el => el.name !== product);
    }

    createProduct(name){
        const id = (dataBase.length + 1).toString();
        const b = new Product(id,name);
        dataBase.push(b);
        return dataBase
    }

    updateProduct(){

    }


}

module.exports = new ProductService;
