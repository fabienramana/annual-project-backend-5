const joi = require('@hapi/joi');

const createModel = joi.object({
    prix: joi.number().required(),
    date: joi.date().required(),
    utilisateur_id: joi.number().required(),
    achat_produit_id: joi.number().required(),
    colis_id: joi.number(),
});

const updateModel = joi.object({
    prix: joi.number(),
    date: joi.date(),
    utilisateur_id: joi.number(),
    achat_produit_id: joi.number(),
    colis_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}