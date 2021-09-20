const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const projet = req.body;

 
    createOne(projet)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}