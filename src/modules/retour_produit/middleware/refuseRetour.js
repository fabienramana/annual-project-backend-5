const { updateRetour: updateOne } = require('../repository')

module.exports = (req, res, next) => {
    const { id } = req.body;
    const obj = {
        statut: 'Refusé'
    }
    console.log(obj);
    

    updateOne(obj, id)
        .then((status) => {
            res.json(status)
        })
        .catch((err) => {
            next(err);
        });
}