const { getAllByUser } = require('../repository');
const { findUserByEmail } = require('../../user/repository')

module.exports = (req, res, next) => {
    const { email } = req.params;
    
    findUserByEmail(email)
    .then((user) => getAllByUser(user.id))
    .then((achats) => {
        res.json(achats);
    })
    .catch((err) =>{
        next(err);
    })
}