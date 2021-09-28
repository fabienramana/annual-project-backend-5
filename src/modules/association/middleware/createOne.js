const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { nom } = req.body;
    const { rna } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { logo } = req.body;

    createOne(nom, rna, email, password, logo)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}