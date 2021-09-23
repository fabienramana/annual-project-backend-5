const { getAllCategories } = require('../repository');
const { getAllCaracTechnique: getAllCaracs } = require ('../../caracteristiques_tech/repository')
const getAllUnites = require('../../unite/service/getAll');

module.exports = async (req, res, next) => {
    try {
        const categories = await getAllCategories();
        const caracs = await getAllCaracs();
        const unites = await getAllUnites();
        caracs.forEach(carac => {
            let unite = unites.filter(u => u.id == carac.uniteId);
            carac.unite = unite[0];
        });
        categories.forEach(cat => {
            let cars = caracs.filter(car => car.categorieId == cat.id)
            cat.caracteristiques = cars;
        });
        res.json(categories);
    } catch (err) {
        next(err);
    }
}