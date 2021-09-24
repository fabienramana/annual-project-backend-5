const { getAllVentesByUser: getAllByUser } = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params;
    
    getAllByUser(id)
    .then((achats) => {
        res.json(achats);
    })
    .catch((err) =>{
        next(err);
    })
}