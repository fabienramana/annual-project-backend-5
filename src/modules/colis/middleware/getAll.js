const { getAllColis: getAll } = require('../repository');

module.exports = (req, res, next) => {
    getAll()
    .then((colis) => {
        res.json(colis);
    })
    .catch((err) =>{
        next(err);
    })
}