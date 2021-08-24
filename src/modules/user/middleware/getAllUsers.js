const getAllUsers = require('../../user/service/getAllUsers');

module.exports = (req, res, next) => {
    getAllUsers()
    .then((users) => {
        res.json(users);
    })
    .catch((err) =>{
        next(err);
    })
}