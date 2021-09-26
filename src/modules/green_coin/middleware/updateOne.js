const updateOne = require('../service/updateOne');

module.exports = (req, res, next) => {
    const greenCoinToUpdate = req.body
    const { id } = req.params;

    updateOne(greenCoinToUpdate, id)
        .then((green_coin) => {
            res.json(green_coin)
        })
        .catch((err) => {
        next(err);
        });
}