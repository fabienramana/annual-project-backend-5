const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    abreviation: joi.string().required(),
    type: joi.string().required()
});

const updateModel = joi.object({
    libelle: joi.string(),
    abreviation: joi.string(),
    type: joi.string()
});



module.exports = {
    createModel,
    updateModel
}