const jwt = require('jsonwebtoken')
const createOne = require('../service/createOne');

module.exports = (req, res, next) => {
    const { nom } = req.body;
    const { rna } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { logo } = req.body;

    createOne(nom, rna, email, password, logo)
    .then((returnedAssociation) => {
        var association = {
            email: returnedAssociation.email,
            role: "Association"
        }
    jwt.sign(association, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
        res.status(201).json({
            token,
        });
    });
    })
        .catch((err) => {
        next(err);
        });
}