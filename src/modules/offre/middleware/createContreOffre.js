const createContreOffre = require('../service/createContreOffre');

module.exports = async (req, res, next) => {
    const { id } = req.params;
    const {prix} = req.body
    
    createContreOffre(id, prix)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}