const { Router } = require('express');

const createOfferProcess = require('./middleware/createOfferProcess');
const validateAchat = require('./middleware/validateAchat');

const router = new Router();

router.route('/vente-produit')
.post(createOfferProcess);

router.route('/validate-achat/:transactionId')
.put(validateAchat)

module.exports = router;