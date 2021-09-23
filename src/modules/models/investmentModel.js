const joi = require('@hapi/joi');

const createModel = joi.object({
    amount: joi.number().required(),
    projetId: joi.number().required(),
});

const updateModel = joi.object({
    amount: joi.number(),
    projetId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}