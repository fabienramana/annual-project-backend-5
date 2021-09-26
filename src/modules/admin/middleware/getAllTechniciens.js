const {getUsersByRole} = require('../../user/repository');

module.exports = async (req, res, next) => {
    const {role} = req.body;
    
    getUsersByRole(role)
        .then((users) => {
            for(user of users){
                delete user.password
            }
            res.json({
                users
            })
        })
        .catch((err) => {
        next(err);
        });
}