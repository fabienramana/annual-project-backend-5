const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    uniteId: joi.number().required(),
    categorieId: joi.number().required()
});

const updateModel = joi.object({
    libelle: joi.string(),
    uniteId: joi.number(),
    categorieId: joi.number()
});



module.exports = {
    createModel,
    updateModel
}