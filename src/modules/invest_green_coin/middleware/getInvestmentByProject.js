const {getInvestmentByProject} = require('../repository');

module.exports = (req, res, next) => {
    const {id} = req.params;
    getInvestmentByProject(id)
        .then((investments) => {
            res.json(investments)
        })
        .catch((err) => {
        next(err);
        });
}