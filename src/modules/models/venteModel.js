const joi = require('@hapi/joi');

const createModel = joi.object({
    statut: joi.string().required(),
    date: joi.date().required(),
    produitId: joi.number().required(),
    colisId: joi.number(),
});

const updateModel = joi.object({
    statut: joi.string(),
    date: joi.date(),
    produitId: joi.number(),
    colisId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}