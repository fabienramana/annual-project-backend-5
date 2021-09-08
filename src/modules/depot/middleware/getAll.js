const getAllUsers = require('../service/getAll');

module.exports = (req, res, next) => {
    getAllUsers()
    .then((depots) => {
        res.json(depots);
    })
    .catch((err) =>{
        next(err);
    })
}