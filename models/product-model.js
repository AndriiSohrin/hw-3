
const dataBase = [
    {
        id: '1',
        name: 'potatoes',
        price: 1200
    },
    {
        id: '2',
        name: 'tomato',
        price: 1300
    },
    {
        id: '3',
        name: 'carrots',
        price: 1230
    },

];

class Product{
    constructor(id,name,price ){
        this.id = id;
        this.name = name;
        this.price = price;

    }

};

module.exports = {
    dataBase,
    Product
};
