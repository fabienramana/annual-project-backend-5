const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libelle } = req.body;
    const { adresse } = req.body;
    const { code_postal } = req.body;
    const { ville } = req.body;


    createOne(libelle, adresse, code_postal, ville)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}