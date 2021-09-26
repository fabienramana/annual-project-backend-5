const { deleteUser } = require('../../user/repository')

module.exports = (req, res, next) => {
    const { id } = req.params;

    deleteUser(id)
    .then((status) => {
        res.json({
            status
        })
    })
    .catch((err) => {
    next(err);
    });
}