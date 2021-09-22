const joi = require('@hapi/joi');

const createModel = joi.object({
    titre: joi.string().required(),
    prix: joi.number().required(),
    categorie_id: joi.number().required(),
});

const updateModel = joi.object({
    titre: joi.string(),
    prix: joi.number(),
    categorie_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}