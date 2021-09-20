const getAll = require('../service/getAll');

module.exports = (req, res, next) => {
    getAll()
    .then((projets) => {
        res.json(projets);
    })
    .catch((err) =>{
        next(err);
    })
}