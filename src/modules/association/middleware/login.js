const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findOneByEmail } = require('../repository')

module.exports = (req, res, next) => {
    console.log(req.body.email)
    findOneByEmail(req.body.email)
    .then((returnedUser) => {
        console.log(returnedUser)
        bcrypt.compare(req.body.password, returnedUser.password, (err, res2)=> {
            if (res2 === true) {
                var user = {
                    email: returnedUser.email,
                    role: "Association"
                }
                jwt.sign( user , 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
                    res.json({
                        token,
                    });
                });
            } else if (res2 === false) {
                console.log(res2)
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