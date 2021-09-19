const joi = require('@hapi/joi');

const createModel = joi.object({
    achat_id: joi.number().required(),
    produit_id: joi.number().required(),
});

const updateModel = joi.object({
    achat_id: joi.number(),
    produit_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}