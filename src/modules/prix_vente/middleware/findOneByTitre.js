const { findPrixVenteByTitre } = require('../repository');

module.exports = (req, res, next) => {
    const {titre} = req.params

    findPrixVenteByTitre(titre)
    .then((prix) => {
        res.json(prix);
    })
    .catch((err) =>{
        console.log(err);
        next(err);
    })
}