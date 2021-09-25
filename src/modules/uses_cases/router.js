const { Router } = require('express');

const createOfferProcess = require('./middleware/createOfferProcess');
const validateAchat = require('./middleware/validateAchat');
const updateOfferStatus = require('./middleware/updateOfferStatus');

const router = new Router();

router.route('/vente-produit')
.post(createOfferProcess);

router.route('/validate-achat/:transactionId')
.put(validateAchat)

router.route('/offre/statut/:id')
.put(updateOfferStatus)

module.exports = router;