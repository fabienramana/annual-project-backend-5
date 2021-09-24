const joi = require('@hapi/joi');

const createModel = joi.object({
    libelle: joi.string().required(),
    description: joi.string().required(),
    dateDebut: joi.date().required(),
    dateFin: joi.date().required(),
});

const updateModel = joi.object({
    libelle: joi.string(),
    description: joi.string(),
    dateDebut: joi.date(),
    dateFin: joi.date(),
});



module.exports = {
    createModel,
    updateModel
}