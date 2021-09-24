const { getAllPrixVente :getAllPrix } = require('../repository');

module.exports = (req, res, next) => {
    getAllPrix()
    .then((prix) => {
        res.json(prix);
    })
    .catch((err) =>{
        console.log(err);
        next(err);
    })
}