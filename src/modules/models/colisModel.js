const joi = require('@hapi/joi');

const createModel = joi.object({
    date: joi.date().required(),
    prix: joi.number().required(),
    type: joi.string().required(),
    achat_id: joi.number(),
    vente_id: joi.number(),
});

const updateModel = joi.object({
    date: joi.date(),
    prix: joi.number(),
    type: joi.string(),
    achat_id: joi.number(),
    vente_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}