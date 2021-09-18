const getAll = require('../service/getAll');

module.exports = (req, res, next) => {
    getAll()
    .then((achats) => {
        res.json(achats);
    })
    .catch((err) =>{
        next(err);
    })
}