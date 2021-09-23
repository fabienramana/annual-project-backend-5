const joi = require('@hapi/joi');

const createModel = joi.object({
    achatId: joi.number().required(),
    produitId: joi.number().required(),
});

const updateModel = joi.object({
    achatId: joi.number(),
    produitId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}