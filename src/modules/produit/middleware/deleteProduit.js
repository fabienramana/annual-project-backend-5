const deleteProduit = require('../service/deleteProduit');

module.exports = (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    deleteProduit(id)
        .then((status) => {
            res.json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}