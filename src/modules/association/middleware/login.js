const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findOneByEmail } = require('../repository')

module.exports = async (req, res, next) => {
    console.log(req.body.email)

    try {
        const association = await findOneByEmail(req.body.email)
        if(association === null) {
            return res.status(401).send('Email ou mot de passe incorrect')
        }
        bcrypt.compare(req.body.password, association.password, (err, res2)=> {
            if (res2 === true) {
                var infos = {
                    email: association.email,
                    role: "Association"
                }
                jwt.sign( infos , 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
                    res.json({
                        token,
                    });
                });
            } else if (res2 === false) {
                return res.status(401).send('Email ou mot de passe incorrect')
            } else if (err) {
                return res.status(500).send('Erreur lors de l\'authentification')
            }
        });
    } catch (errFinal) {
        next(errFinal);
    }
};