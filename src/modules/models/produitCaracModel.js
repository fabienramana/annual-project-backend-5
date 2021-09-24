const joi = require('@hapi/joi');

const createModel = joi.object({
    valeur: joi.string().required(),
    caracteristiquesTechId: joi.number().required(),
    produitId: joi.number().required()
});

const updateModel = joi.object({
    valeur: joi.string(),
    caracteristiquesTechId: joi.number(),
    produitId: joi.number()
});



module.exports = {
    createModel,
    updateModel
}