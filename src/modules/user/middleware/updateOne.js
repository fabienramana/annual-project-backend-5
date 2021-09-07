const updateOne = require('../service/updateOne');
const bcrypt = require('bcrypt')

module.exports = (req, res, next) => {
    const { id } = req.params
    const userToUpdate = req.body

    if(userToUpdate.password != null){
        userToUpdate.password = bcrypt.hashSync(userToUpdate.password, 10);
    }

    updateOne(id, userToUpdate)
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