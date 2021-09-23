const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const login = require('../service/login')

module.exports = (req, res, next) => {
    console.log(req.body.email)
    const email = req.body.email
    login(req.body.email)
    .then((user) => {
        bcrypt.compare(req.body.password, user.password, (err, res2)=> {
            if (res2 === true) {
                jwt.sign({ email }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
                    res.json({
                        token,
                    });
                });
            } else if (res2 === false) {
                res.json({
                    error: "Erreur lors de l'authentification",
                });
            } else if (err) {
                res.json({
                    error: "Erreur lors de l'authentification",
                });
            }
        });
    })
    .catch((errFinal) => {
        next(errFinal);
    });
};