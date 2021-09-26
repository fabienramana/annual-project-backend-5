const { getAllAssociations: getAll } = require('../repository');

module.exports = (req, res, next) => {
    getAll()
    .then((associations) => {
        res.json(associations);
    })
    .catch((err) =>{
        next(err);
    })
}