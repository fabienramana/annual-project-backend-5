const createOne = require('../service/createOne');
const decodeToken = require('../../../services/decodeToken')

module.exports = (req, res, next) => {
    const association = decodeToken(req)
    const projet = req.body;

    createOne(projet, association.email)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}