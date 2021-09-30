const createOne = require('../service/createOne');
const decodeToken = require('../../../services/decodeToken')

module.exports = (req, res, next) => {
    console.log('aaaa');
    const user = decodeToken(req)
    const projet = req.body;

    createOne(projet, user.email)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}