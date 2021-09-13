const joi = require('@hapi/joi');

const categorieModel = joi.object({
    libelle: joi.string().required()
});



module.exports = {
    categorieModel
}