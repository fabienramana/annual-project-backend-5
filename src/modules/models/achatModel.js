const joi = require('@hapi/joi');

const createModel = joi.object({
    prix: joi.number().required(),
    date: joi.date().required(),
    utilisateur_id: joi.number().required(),
    produit_id: joi.number().required(),
});

const updateModel = joi.object({
    prix: joi.number(),
    date: joi.date(),
    utilisateur_id: joi.number(),
    produit_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}