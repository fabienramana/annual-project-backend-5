const joi = require('@hapi/joi');

const createModel = joi.object({
    prix: joi.number().required(),
    type: joi.string().required(),
});

const updateModel = joi.object({
    prix: joi.number(),
    type: joi.string(),
});



module.exports = {
    createModel,
    updateModel
}