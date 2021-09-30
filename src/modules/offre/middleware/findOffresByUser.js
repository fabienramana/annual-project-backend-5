const { findOffresByUser } = require('../repository')

module.exports = async (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    findOffresByUser(id)
        .then((offres) => {
            res.json(offres)
        })
        .catch((err) => {
        next(err);
        });
}