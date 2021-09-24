const { findOneById, updateUser } = require('../repository')

module.exports = (id) => {
    return findOneById(id)
    .then((user)=>{
        var userToUpdate;
        if(user.estAdmin == false){
            userToUpdate = {
                estAdmin: true
            }
        }
        else{
            userToUpdate = {
                estAdmin: false
            }
        }
        return userToUpdate;
    })
    .then((userToUpdate) => updateUser(userToUpdate, id))
    .then(function(){
        return findOneById(id)
    })
}