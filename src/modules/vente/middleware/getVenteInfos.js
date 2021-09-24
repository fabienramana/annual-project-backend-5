const getVenteInfos = require('../service/getVenteInfos');

module.exports = async (req, res, next) => {
    console.log("hello")
    const { id } = req.params;
    
    getVenteInfos(id)
    .then((vente) => {
        res.json(vente);
    })
    .catch((err) =>{
        next(err);
    })
}