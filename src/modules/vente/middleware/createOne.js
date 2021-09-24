const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const vente  = req.body;
    var email = "fabien.rmnd@gmail.com"
    createOne(vente, email)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}