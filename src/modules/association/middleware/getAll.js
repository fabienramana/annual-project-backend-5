const { getAllAssociations } = require('../repository');
const { getAllProjets } = require('../../projet/repository')

module.exports = async (req, res, next) => {
    try{
        const associations = await getAllAssociations();
        const projets = await getAllProjets();
        associations.forEach(association => {
            delete association.password
            let projet = projets.filter(p => p.associationId == association.id);
            association.projets = projet;
        });
        res.json(associations)
    }
    catch (err){
        next(err)
    }
}