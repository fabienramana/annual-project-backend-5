const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findUserByEmail } = require('../repository')

module.exports = async (req, res, next) => {
    console.log(req.body.email)

    try {
        const user = await findUserByEmail(req.body.email);
        if(user === null) {
            return res.status(401).send('Email ou mot de passe incorrect')
        }
        bcrypt.compare(req.body.password, user.password, (err, res2)=> {
            if (res2 === true) {
                var infos = {
                    email: user.email,
                    role: user.role
                }
                jwt.sign( infos , 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
                    return res.json({
                        token,
                    });
                });
            } else if (res2 === false) {
                return res.status(401).send('Email ou mot de passe incorrect')
            } else if (err) {
                return res.status(500).send('Erreur lors de l\'authentification')
            }
        });
    } catch(errFinal) {
        next(errFinal);
    }
};