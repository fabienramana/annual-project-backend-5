const { getAllVentesByUser } = require('../repository');
const { findUserByEmail } = require('../../user/repository');
const { findColisById } = require('../../colis/repository');

module.exports = async (req, res, next) => {
    const { email } = req.params;

    try {
        const user = await findUserByEmail(email);
        const ventes = await getAllVentesByUser(user.id);
        for await (const vente of ventes) {
            if(vente.colisId !== null) {
                vente.colis = await findColisById(vente.colisId);
            }
        }
        res.json(ventes);
    } catch (err) {
        console.log(err);
        next(err);
    }

}