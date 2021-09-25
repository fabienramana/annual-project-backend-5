const validateAchat = require('../service/validateAchat');

module.exports = async (req, res, next) => {
    const { transactionId } = req.params
    console.log(transactionId)
    
    validateAchat(transactionId)
        .then((status) => {
            res.json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}