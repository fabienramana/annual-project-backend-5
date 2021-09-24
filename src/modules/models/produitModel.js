const joi = require('@hapi/joi');

const createModel = joi.object({
    titre: joi.string().required(),
    description: joi.string().required(),
    prix: joi.number(),
    etat: joi.string().required(),
    statut: joi.string().required(),
    categorieId: joi.number().required(),
    depotId: joi.number(),
});

const updateModel = joi.object({
    titre: joi.string(),
    description: joi.string(),
    prix: joi.number(),
    etat: joi.string(),
    statut: joi.string(),
    categorieId: joi.number(),
    depotId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}