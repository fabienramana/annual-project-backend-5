const joi = require('@hapi/joi');

const createModel = joi.object({
    valeur: joi.string().required(),
    caracteristiques_tech_id: joi.number().required(),
    produit_id: joi.number().required()
});

const updateModel = joi.object({
    valeur: joi.string(),
    caracteristiques_tech_id: joi.number(),
    produit_id: joi.number()
});



module.exports = {
    createModel,
    updateModel
}