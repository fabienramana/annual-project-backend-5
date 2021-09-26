const updateOne = require('../service/updateOne');
const bcrypt = require('bcrypt')
const {findUserByEmail} = require('../repository')

module.exports = (req, res, next) => {
    const { email } = req.params
    const userToUpdate = req.body

    if(userToUpdate.password != null){
        userToUpdate.password = bcrypt.hashSync(userToUpdate.password, 10);
    }

    findUserByEmail(email)
    .then((user) => updateOne(user.id, userToUpdate))
    .then((user) => {
        delete user.password;
        res.json(user)
    })
    .catch((err)=> {
        next(err)
    })
}