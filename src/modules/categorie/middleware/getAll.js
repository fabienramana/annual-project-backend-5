const getAllUsers = require('../service/getAll');
const getAllCaracs = require ('../../caracteristiques_tech/service/getAll')
const getAllUnites = require('../../unite/service/getAll');

module.exports = async (req, res, next) => {
    try {
        const categories = await getAllUsers();
        const caracs = await getAllCaracs();
        const unites = await getAllUnites();
        caracs.forEach(carac => {
            let unite = unites.filter(u => u.id == carac.unite_id);
            carac.unite = unite[0];
        });
        categories.forEach(cat => {
            let cars = caracs.filter(car => car.categorie_id == cat.id)
            cat.caracteristiques = cars;
        });
        res.json(categories);
    } catch (err) {
        next(err);
    }
}