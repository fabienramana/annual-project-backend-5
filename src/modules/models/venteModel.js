const joi = require('@hapi/joi');

const createModel = joi.object({
    statut: joi.string().required(),
    date: joi.date().required(),
    produit_id: joi.number().required(),
});

const updateModel = joi.object({
    statut: joi.string(),
    date: joi.date(),
    produit_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}