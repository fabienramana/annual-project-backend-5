const {getAllUnites:getAll} = require('../repository');

module.exports = (req, res, next) => {
    getAll()
    .then((unites) => {
        res.json(unites);
    })
    .catch((err) =>{
        next(err);
    })
}