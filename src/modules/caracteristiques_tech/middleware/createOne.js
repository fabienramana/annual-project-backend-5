const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const caracTechnique = req.body

    createOne(caracTechnique)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}