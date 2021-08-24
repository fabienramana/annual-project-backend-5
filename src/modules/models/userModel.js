const joi = require('@hapi/joi');

const createModel = joi.object({
    nom: joi.string().required(),
    prenom: joi.string().required(),
    email: joi.string().required(), 
    date_naissance: joi.date(),
    password: joi.string().required(),
    adresse: joi.string().required(),
    code_postal: joi.number().required(),
    ville: joi.string().required(),
});

const updateModel = joi.object({
    nom: joi.string(),
    prenom: joi.string(),
    email: joi.string(), 
    date_naissance: joi.date(),
    password: joi.string(),
    adresse: joi.string(),
    code_postal: joi.number(),
    ville: joi.string(),
});

module.exports = {
    createModel,
    updateModel
}