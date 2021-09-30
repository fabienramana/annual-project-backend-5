const { findOffresByUser } = require('../repository')

module.exports = async (req, res, next) => {
    const { email } = req.params;
    console.log(email)
    findOffresByUser(email)
        .then((offres) => {
            res.json(offres)
        })
        .catch((err) => {
        next(err);
        });
}