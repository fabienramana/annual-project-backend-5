const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const image = req.body;
    console.log(image)

    createOne(image)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}