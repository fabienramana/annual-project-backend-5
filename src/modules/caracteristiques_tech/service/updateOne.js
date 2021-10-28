const { updateModel } = require('../../models/caracteristiqueTechModel')

const{ updateCaracTechnique: updateOne, findCaracTechniqueById: findOneById } = require('../repository')

module.exports = (caracTechs, id) => {    
    return updateModel.validate(caracTechs)
    .then(() => updateOne(caracTechs, id))
    .then(function(){
        return findOneById(id);
    })
}