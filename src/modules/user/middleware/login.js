const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const login = require('../service/login')

module.exports = (req, res, next) => {
    console.log(req.body.email)
    const email = req.body.email
    login(req.body.email)
    .then((returnedUser) => {
        bcrypt.compare(req.body.password, returnedUser.password, (err, res2)=> {
            if (res2 === true) {
                var user = {
                    email: returnedUser.email,
                    role: returnedUser.role
                }
                jwt.sign( user , 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
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