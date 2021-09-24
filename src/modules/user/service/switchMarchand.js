const { findOneById, updateUser } = require('../repository')

module.exports = (id) => {
    return findOneById(id)
    .then((user)=>{
        
        var userToUpdate;
        if(user.estMarchand == false){
            userToUpdate = {
                estMarchand: true
            }
        }
        else{
            userToUpdate = {
                estMarchand: false
            }
        }
        return userToUpdate;
    })
    .then((userToUpdate) => updateUser(userToUpdate, id))
    .then(function(){
        return findOneById(id)
    })
}