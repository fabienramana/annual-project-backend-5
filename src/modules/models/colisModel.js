const joi = require('@hapi/joi');

const createModel = joi.object({
    date: joi.date().required(),
    prix: joi.number().required(),
    type: joi.string().required(),
});

const updateModel = joi.object({
    date: joi.date(),
    prix: joi.number(),
    type: joi.string(),
});



module.exports = {
    createModel,
    updateModel
}