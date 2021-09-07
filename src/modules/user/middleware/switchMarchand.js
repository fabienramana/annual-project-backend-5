const switchMarchand = require('../service/switchMarchand')


module.exports = (req,res,next) => {
    const { id } = req.params

    switchMarchand(id)
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