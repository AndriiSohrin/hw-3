const dataBase = require('../../models/product-model')

module.exports = (req, res, next) => {
    try {
        next()
    } catch (e) {
        res.json('error middleware')
    }
};
