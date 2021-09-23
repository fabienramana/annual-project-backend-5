const { updateModel } = require('../../models/caracteristiqueTechModel')

const{ updateCaracTechnique: updateOne, findCaracTechniqueById: findOneById } = require('../repository')

module.exports = (caracTechs, id) => {
    console.log(caracTechs)
    console.log(id)
    
    return updateModel.validate(caracTechs)
    .then(() => updateOne(caracTechs, id))
    .then(function(){
        return findOneById(id);
    })
}