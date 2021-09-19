const joi = require('@hapi/joi');

const createModel = joi.object({
    montant: joi.number().required(),
    utilisateur_id: joi.number().required(),
});

const updateModel = joi.object({
    montant: joi.number(),
    utilisateur_id: joi.number(),
    montant_restant: joi.number(),
    utilisateur_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}