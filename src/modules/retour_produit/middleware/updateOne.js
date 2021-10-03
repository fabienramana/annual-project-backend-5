const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const retourToUpdate  = req.body
    const { id } = req.params;


    updateOne(retourToUpdate, id)
        .then((status) => {
            res.json(status)
        })
        .catch((err) => {
        next(err);
        });
}