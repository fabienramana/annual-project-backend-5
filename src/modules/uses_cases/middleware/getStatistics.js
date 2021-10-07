const getStatistics = require('../service/getStatistics');

module.exports = async (req, res, next) => {

    getStatistics()
        .then((response) => {
            res.json(response)
        })
        .catch((err) => {
        next(err);
        });
}