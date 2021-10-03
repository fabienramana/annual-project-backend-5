const joi = require('@hapi/joi');

const createModel = joi.object({
    id: joi.number(),
    montant: joi.number().required(),
    projetId: joi.number().required(),
    greenCoinId: joi.number()
});

const updateModel = joi.object({
    id: joi.number(),
    montant: joi.number(),
    projetId: joi.number(),
    greenCoinId: joi.number()
});



module.exports = {
    createModel,
    updateModel
}