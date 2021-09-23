const {getAllDepots: getAll} = require('../repository');

module.exports = (req, res, next) => {
    getAll()
    .then((depots) => {
        res.json(depots);
    })
    .catch((err) =>{
        next(err);
    })
}