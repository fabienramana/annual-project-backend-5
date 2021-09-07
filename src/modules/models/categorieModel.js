const joi = require('@hapi/joi');

const categorieModel = joi.object({
    libellé: joi.string().required()
});



module.exports = {
    categorieModel
}