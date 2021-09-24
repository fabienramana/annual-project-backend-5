const {getAllUsers} = require('../repository');

module.exports = (req, res, next) => {
    getAllUsers()
    .then((users) => {
        users.forEach(function(v){ delete v.password });
        res.json(users);
    })
    .catch((err) =>{
        next(err);
    })
}