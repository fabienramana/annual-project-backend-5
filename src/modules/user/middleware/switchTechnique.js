const switchTechnique = require('../service/switchTechnique')


module.exports = (req,res,next) => {
    const { id } = req.params

    switchTechnique(id)
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