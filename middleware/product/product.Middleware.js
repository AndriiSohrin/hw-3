

module.exports = (req, res, next) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error()
        }

        next()
    } catch (e) {
        res.json('error middleware')
    }
};
