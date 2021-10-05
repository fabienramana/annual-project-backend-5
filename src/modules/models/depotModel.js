const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    adresse: joi.string().required(),
    codePostal: joi.number().required(),
    ville: joi.string().required(),
    capacite: joi.number().required(),
});

const updateModel = joi.object({
    libelle: joi.string(),
    adresse: joi.string(),
    codePostal: joi.number(),
    ville: joi.string(),
    capacite: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}