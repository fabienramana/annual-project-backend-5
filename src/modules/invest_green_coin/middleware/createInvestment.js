const createInvestment = require('../service/createInvestment');

module.exports = (req, res, next) => {
    const investment = req.body;
    var email = "fabien.rmnd@gmail.com" // A remplacer avec le token
    
    createInvestment(investment, email)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}