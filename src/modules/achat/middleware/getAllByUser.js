const  getAllByUser = require('../service/getAllByUser');

module.exports = async (req, res, next) => {
    const { email } = req.params;
    
    getAllByUser(email)
    .then((achats) => {
        res.json(achats);
    })
    .catch((err) =>{
        next(err);
    })
}