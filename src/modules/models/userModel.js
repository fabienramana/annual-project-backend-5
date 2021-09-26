const joi = require('@hapi/joi');

const createModel = joi.object({
    nom: joi.string().required(),
    prenom: joi.string().required(),
    email: joi.string().required(), 
    dateNaissance: joi.date(),
    password: joi.string().required(),
    adresse: joi.string().required(),
    codePostal: joi.number().required(),
    ville: joi.string().required(),
    role: joi.string(),
});

const updateModel = joi.object({
    nom: joi.string(),
    prenom: joi.string(),
    email: joi.string(), 
    dateNaissance: joi.date(),
    password: joi.string(),
    adresse: joi.string(),
    codePostal: joi.number(),
    ville: joi.string(),
    role: joi.string(),
});

const createTechnicienModel = joi.object({
    nom: joi.string().required(),
    prenom: joi.string().required(),
    email: joi.string().required(), 
    password: joi.string().required(),
    role: joi.string(),
});

module.exports = {
    createModel,
    updateModel,
    createTechnicienModel
}