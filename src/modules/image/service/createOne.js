const { createModel } = require('../../models/imageModel')
const { createImage: createOne } = require('../repository')

module.exports = async (image) => {

    return createModel.validate(image)
    .then(() => createOne(image))
}