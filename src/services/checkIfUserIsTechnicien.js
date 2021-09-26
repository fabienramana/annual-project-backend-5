const decodeToken = require('./decodeToken')

module.exports = (req, res, next) => {
    const user = decodeToken(req)
    if(user.role == "Utilisateur" || user.role == "Marchand"){
        res.status(403).json({
        status: 'Unauthorized',
        });
    } else {
        next();
    }
}