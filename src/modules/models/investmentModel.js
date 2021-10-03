const joi = require('@hapi/joi');

const createModel = joi.object({
    montant: joi.number().required(),
    projetId: joi.number().required(),
});

const updateModel = joi.object({
    montant: joi.number(),
    projetId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}