const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const investment = req.body;

    
    createOne(investment)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}