const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libelle } = req.body;
    const { adresse } = req.body;
    const { codePostal } = req.body;
    const { ville } = req.body;
    const { capacite } = req.body;


    createOne(libelle, adresse, codePostal, ville, capacite)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}