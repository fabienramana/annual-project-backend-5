const joi = require('@hapi/joi');

const createModel = joi.object({
    description: joi.string().required(),
    etat: joi.string().required(),
    statut: joi.string().required(),
    categorie_id: joi.number().required(),
    depot_id: joi.number().required(),
});

const updateModel = joi.object({
    description: joi.string(),
    etat: joi.string(),
    statut: joi.string(),
    categorie_id: joi.number(),
    depot_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}