const validateAchat = require('../service/validateAchat');

module.exports = async (req, res, next) => {
    const { transactionId } = req.params

    var email = "fabien.rmnd@gmail.com" //a changer avec le token
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