const joi = require('@hapi/joi');

const createModel = joi.object({
    date: joi.date().required(),
    utilisateurId: joi.number().required(),
    achatProduitId: joi.number().required(),
    colisId: joi.number(),
});

const updateModel = joi.object({
    date: joi.date(),
    utilisateurId: joi.number(),
    achatProduitId: joi.number(),
    colisId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}