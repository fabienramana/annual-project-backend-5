const joi = require('@hapi/joi');

const createModel = joi.object({
    url: joi.string().required(),
    produit_id: joi.number().required(),
});

const updateModel = joi.object({
    url: joi.string(),
    produit_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}