const joi = require('@hapi/joi');

const createModel = joi.object({
    date: joi.date().required(),
    utilisateurId: joi.number().required(),
    colisId: joi.number(),
    transactionId: joi.string().required()
});

const updateModel = joi.object({
    statut: joi.string(),
    date: joi.date(),
    utilisateurId: joi.number(),
    colisId: joi.number(),
    transactionId: joi.string()
});



module.exports = {
    createModel,
    updateModel
}