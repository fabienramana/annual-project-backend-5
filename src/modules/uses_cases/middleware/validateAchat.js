const validateAchat = require('../service/validateAchat');
const decodeToken = require('../../../services/decodeToken')

module.exports = async (req, res, next) => {
    const { transactionId } = req.body
    const user = decodeToken(req)
    console.log(user)
    var email = user.email
    console.log(transactionId)
    
    validateAchat(transactionId, email)
        .then((status) => {
            res.json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}