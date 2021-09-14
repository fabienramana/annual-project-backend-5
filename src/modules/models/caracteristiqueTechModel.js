const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    unite_id: joi.number().required(),
    categorie_id: joi.number().required()
});

const updateModel = joi.object({
    libelle: joi.string(),
    unite_id: joi.number(),
    categorie_id: joi.number()
});



module.exports = {
    createModel,
    updateModel
}