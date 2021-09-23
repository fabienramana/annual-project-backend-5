const { updateModel } = require('../../models/greenCoinModel')
const { findGreenCoinById: findOneById, updateGreenCoin: updateOne } = require('../repository')
module.exports = (greenCoinToUpdate, id) => {

    return updateModel.validate(greenCoinToUpdate)
    .then(() => updateOne(greenCoinToUpdate, id))
    .then(function(){
        return findOneById(id);
    })
}