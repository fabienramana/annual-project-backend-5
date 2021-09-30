const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    description: joi.string().required(),
    somme: joi.number().required(),
    dateDebut: joi.date().required(),
    dateFin: joi.date().required(),
    associationId: joi.number().required(),
    id: joi.number()
});

const updateModel = joi.object({
    libelle: joi.string(),
    description: joi.string(),
    somme: joi.number(),
    dateDebut: joi.date(),
    dateFin: joi.date(),
});



module.exports = {
    createModel,
    updateModel
}