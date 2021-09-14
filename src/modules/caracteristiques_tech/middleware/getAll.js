const getAll = require('../service/getAll');

module.exports = (req, res, next) => {
    getAll()
    .then((carac_tech) => {
        res.json(carac_tech);
    })
    .catch((err) =>{
        next(err);
    })
}