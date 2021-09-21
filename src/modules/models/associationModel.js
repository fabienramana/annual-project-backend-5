const joi = require('@hapi/joi');

const createModel = joi.object({
    nom: joi.string().required(),
    rna: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
});

const updateModel = joi.object({
    nom: joi.string(),
    rna: joi.string(),
    email: joi.string(),
    password: joi.string(),
});



module.exports = {
    createModel,
    updateModel
}