const joi = require('@hapi/joi');

const createModel = joi.object({
    nom: joi.string().required(),
    date_debut: joi.date().required(),
    date_fin: joi.date().required(),
});

const updateModel = joi.object({
    nom: joi.string(),
    date_debut: joi.date(),
    date_fin: joi.date(),
});



module.exports = {
    createModel,
    updateModel
}