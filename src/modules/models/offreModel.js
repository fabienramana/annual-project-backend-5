const joi = require('@hapi/joi');

const updateModel = joi.object({
    date: joi.date(),
    prix: joi.number(),
    venteId: joi.number(),
    colisId: joi.number(),
});



module.exports = {
    updateModel
}