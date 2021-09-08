const joi = require('@hapi/joi');

const createModel = joi.object({
    libellé: joi.string().required(),
    adresse: joi.string().required(),
    code_postal: joi.number().required(),
    ville: joi.string().required(),
});

const updateModel = joi.object({
    libellé: joi.string(),
    adresse: joi.string(),
    code_postal: joi.number(),
    ville: joi.string(),
});



module.exports = {
    createModel,
    updateModel
}