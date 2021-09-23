const joi = require('@hapi/joi');

const createModel = joi.object({
    url: joi.string().required(),
    produitId: joi.number().required(),
});

const updateModel = joi.object({
    url: joi.string(),
    produitId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}