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
        .then((user) => {
        jwt.sign({ user }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
            res.status(201).json({
            /*_id: user._id, // eslint-disable-line no-underscore-dangle
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,*/  
            token,
            });
        });
        })
        .catch((err) => {
        next(err);
        });
}