const joi = require('@hapi/joi');

const updateModel = joi.object({
    date: joi.date(),
    prix: joi.number(),
    venteId: joi.number(),
});



module.exports = {
    updateModel
}