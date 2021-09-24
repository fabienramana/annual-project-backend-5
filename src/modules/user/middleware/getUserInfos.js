const {findOneById: getUserInfos} = require('../repository');

module.exports = (req, res, next) => {
    const { id } = req.params

    getUserInfos(id)
    .then((user) => {
        delete user.password;
        res.json({
            user 
        })
    })
    .catch((err)=> {
        next(err)
    })
}