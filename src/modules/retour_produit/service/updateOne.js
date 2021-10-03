const { updateRetour: updateOne } = require('../repository')

module.exports = (retourToUpdate, id) => {

    return updateOne(retourToUpdate, id)
}