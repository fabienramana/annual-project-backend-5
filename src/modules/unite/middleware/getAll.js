const getAll = require('../service/getAll');

module.exports = (req, res, next) => {
    getAll()
    .then((unites) => {
        res.json(unites);
    })
    .catch((err) =>{
        next(err);
    })
}