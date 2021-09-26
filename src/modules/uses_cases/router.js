const { Router } = require('express');

const createOfferProcess = require('./middleware/createOfferProcess');
const validateAchat = require('./middleware/validateAchat');
const updateOfferStatus = require('./middleware/updateOfferStatus');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');

const router = new Router();

router.post('/vente-produit', checkIfUserIsMarchand, createOfferProcess)

router.put('/validate-achat/:transactionId', checkIfUserIsMarchand, validateAchat)

router.put('/offre/statut/:id', checkIfUserIsMarchand, updateOfferStatus)

module.exports = router;