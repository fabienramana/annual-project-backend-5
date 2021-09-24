const jwt = require('jsonwebtoken');
const createUser = require('../service/createUser');

module.exports = (req, res, next) => {
    const { nom } = req.body;
    const { prenom } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { adresse } = req.body;
    const { dateNaissance } = req.body;
    const { codePostal } = req.body;
    const { ville } = req.body;

    createUser(nom, prenom, email, password, adresse, dateNaissance, codePostal, ville)
        .then((returnedUser) => {
            var user = {
                email: returnedUser.email,
                role: returnedUser.role
            }
        jwt.sign(user, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
            res.status(201).json({
                token,
            });
        });
        })
        .catch((err) => {
        next(err);
        });
}