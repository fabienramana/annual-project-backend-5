const { getAllAssociations: getAll } = require('../repository');

module.exports = (req, res, next) => {
    getAll()
    .then((achats) => {
        res.json(achats);
    })
    .catch((err) =>{
        next(err);
    })
}