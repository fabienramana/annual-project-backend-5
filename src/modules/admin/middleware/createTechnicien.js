const createTechnicien = require('../service/createTechnicien');

module.exports = async (req, res, next) => {
    const user = req.body;
    
    createTechnicien(user)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}