const { getAllCaracTechnique } = require('../repository');
const {getAllUnites} = require('../../unite/repository');

module.exports = async (req, res, next) => {
    try {
        const caracs = await getAllCaracTechnique();
        const unites = await getAllUnites();
        caracs.forEach(carac => {
            let unite = unites.filter(u => u.id == carac.uniteId);
            carac.unite = unite[0];
        });
        res.json(caracs);
    } catch(err) {
        next(err);
    }
}