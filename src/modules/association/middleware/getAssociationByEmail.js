const { getProjetsByAssociationId } = require('../../projet/repository');
const decodeToken = require('../../../services/decodeToken')
const { getOneByEmail } = require('../repository')

module.exports = async (req, res, next) => {

    try {
        const user = decodeToken(req)
        console.log(user)
        const association = await getOneByEmail(user.email);
        const id = association.id
        const projets = await getProjetsByAssociationId(id)
        projets.forEach(projet => {
            projet.logo = association.logo
        });
        association.projets = projets
        res.json(association)
    } catch (err) {
        next(err)
    }
    
}