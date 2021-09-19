const joi = require('@hapi/joi');

const createModel = joi.object({
    amount: joi.number().required(),
    projet_id: joi.number().required(),
    green_coin_id: joi.number().required(),
});

const updateModel = joi.object({
    amount: joi.number(),
    projet_id: joi.number(),
    green_coin_id: joi.number(),
});



module.exports = {
    createModel,
    updateModel
}