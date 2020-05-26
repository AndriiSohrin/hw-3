
const dataBase = [
    {
        id: '1',
        name: 'potatoes',
    },
    {
        id: '2',
        name: 'tomato',
    },
    {
        id: '3',
        name: 'carrots',
    },

];

class Product{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    // create(name){
    //   const a = {id : (dataBase.length+1).toString(), name};
    //   dataBase.push(a)
    // }

};

module.exports = {
    dataBase,
    Product
};
