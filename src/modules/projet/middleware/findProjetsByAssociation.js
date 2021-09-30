const { getProjetsByAssociationId } = require('../repository');
const decodeToken = require('../../../services/decodeToken')
const { getOneByEmail } = require('../../association/repository')

module.exports = async (req, res, next) => {

    try {
        const user = decodeToken(req)
        const association = await getOneByEmail(user.email);
        const id = association.id
        const projets = await getProjetsByAssociationId(id)
        res.json(projets)
    } catch (err) {
        next(err)
    }
    
}