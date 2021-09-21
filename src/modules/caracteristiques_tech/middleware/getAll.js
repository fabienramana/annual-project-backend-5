const getAll = require('../service/getAll');
const getAllUnites = require('../../unite/service/getAll');

module.exports = async (req, res, next) => {
    try {
        const caracs = await getAll();
        const unites = await getAllUnites();
        caracs.forEach(carac => {
            let unite = unites.filter(u => u.id == carac.unite_id);
            carac.unite = unite[0];
        });
        res.json(caracs);
    } catch(err) {
        next(err);
    }
}