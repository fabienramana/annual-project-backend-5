const switchAdmin = require('../service/switchAdmin')


module.exports = (req,res,next) => {
    const { id } = req.params

    switchAdmin(id)
    .then((user)=> {
        delete user.password;
        res.json({
            user
        })
    })
    .catch((err) => {
        next(err)
    })
}