const joi = require('@hapi/joi');

const createModel = joi.object({
    titre: joi.string().required(),
    prix: joi.number().required(),
    categorieId: joi.number().required(),
});

const updateModel = joi.object({
    titre: joi.string(),
    prix: joi.number(),
    categorieId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}