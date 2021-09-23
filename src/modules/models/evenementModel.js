const joi = require('@hapi/joi');

const createModel = joi.object({
    nom: joi.string().required(),
    dateDebut: joi.date().required(),
    dateFin: joi.date().required(),
});

const updateModel = joi.object({
    nom: joi.string(),
    dateDebut: joi.date(),
    dateFin: joi.date(),
});



module.exports = {
    createModel,
    updateModel
}