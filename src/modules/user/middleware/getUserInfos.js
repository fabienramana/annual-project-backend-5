const { findUserByEmail} = require('../repository');

module.exports = (req, res, next) => {
    const { email } = req.params

    findUserByEmail(email)
    .then((user) => {
        delete user.password;
        res.json({
            user 
        })
    })
    .catch((err)=> {
        next(err)
    })
}