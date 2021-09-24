const { findOneById, updateUser } = require('../repository')

module.exports = (id) => {
    return findOneById(id)
    .then((user)=>{
        
        var userToUpdate;
        if(user.estTechnique == false){
            userToUpdate = {
                estTechnique: true
            }
        }
        else{
            userToUpdate = {
                estTechnique: false
            }
        }
        return userToUpdate;
    })
    .then((userToUpdate) => updateUser(userToUpdate, id))
    .then(function(){
        return findOneById(id)
    })
}