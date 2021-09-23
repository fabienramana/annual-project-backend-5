const joi = require('@hapi/joi');

const createModel = joi.object({
    montant: joi.number().required(),
    utilisateurId: joi.number().required(),
});

const updateModel = joi.object({
    montant: joi.number(),
    montantRestant: joi.number(),
    utilisateurId: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}