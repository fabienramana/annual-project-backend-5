const { updateModel } = require('../../models/userModel')
const { findOneById, updateUser } = require('../repository')

module.exports = (id, userToUpdate) => {
    return updateModel.validate(userToUpdate)
    .then(() => updateUser(userToUpdate, id))
    .then(function(){
        return findOneById(id)
    })
}