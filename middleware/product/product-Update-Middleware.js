module.exports = (req, res, next) => {
    try {
        const {name, price} = req.query;

        if(!name || !price){
            throw new Error();
        }

        if(price < 0){
            throw new Error();
        }

        next()
    } catch (e) {
        res.json('error middleware')
    }
};
