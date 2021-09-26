const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const imageToUpdate = req.body
    const { id } = req.params;

    updateOne(imageToUpdate, id)
        .then((image) => {
            res.json(image)
        })
        .catch((err) => {
        next(err);
        });
}