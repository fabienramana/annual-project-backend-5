const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { libellé } = req.body;
    const { adresse } = req.body;
    const { code_postal } = req.body;
    const { ville } = req.body;


    createOne(libellé, adresse, code_postal, ville)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}