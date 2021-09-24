const joi = require('@hapi/joi');

const createModel = joi.object({
    statut: joi.string().required(),
    date: joi.date().required(),
    produitId: joi.number().required(),
});

const updateModel = joi.object({
    statut: joi.string(),
    date: joi.date(),
    produitId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}