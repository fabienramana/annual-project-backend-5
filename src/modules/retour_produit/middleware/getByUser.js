const getByUser = require('../service/getByUser');

module.exports = (req, res, next) => {
    const { email }  = req.params

    getByUser(email)
        .then((retours) => {
            res.json(retours)
        })
        .catch((err) => {
        next(err);
        });
}