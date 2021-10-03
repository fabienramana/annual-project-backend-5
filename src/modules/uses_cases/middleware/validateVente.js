const validateVente = require('../service/validateVente');

module.exports = async (req, res, next) => {
    const { venteId } = req.body;
    const { offreId } = req.body;
    const { statut } = req.body;
    
    validateVente(venteId, offreId, statut)
        .then((status) => {
            res.json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}