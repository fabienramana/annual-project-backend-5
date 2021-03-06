const createOne = require('../service/createOne');
const decodeToken = require('../../../services/decodeToken')

module.exports = (req, res, next) => {
    const vente  = req.body;
    
    const user = decodeToken(req)
    var email = user.email
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