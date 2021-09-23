const getAllPrix = require('../service/getAll');
const camelCase = require('camelcase-keys');

module.exports = (req, res, next) => {
    getAllPrix()
    .then((prix) => {
        res.json(camelCase(prix));
    })
    .catch((err) =>{
        console.log(err);
        next(err);
    })
}