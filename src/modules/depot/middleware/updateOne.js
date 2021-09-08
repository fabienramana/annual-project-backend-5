const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const depotToUpdate = req.body
    const { id } = req.params;

    updateOne(depotToUpdate, id)
        .then((depot) => {
            res.json({
                depot
            })
        })
        .catch((err) => {
        next(err);
        });
}