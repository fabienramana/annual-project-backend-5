const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    adresse: joi.string().required(),
    code_postal: joi.number().required(),
    ville: joi.string().required(),
});

const updateModel = joi.object({
    libelle: joi.string(),
    adresse: joi.string(),
    code_postal: joi.number(),
    ville: joi.string(),
});



module.exports = {
    createModel,
    updateModel
}