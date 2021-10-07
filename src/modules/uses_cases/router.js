const { Router } = require('express');

const createOfferProcess = require('./middleware/createOfferProcess');
const validateAchat = require('./middleware/validateAchat');
const updateOfferStatus = require('./middleware/updateOfferStatus');
const validateVente = require('./middleware/validateVente');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsAdmin = require('../../services/checkIfUserIsAdmin');
const getStatistics = require('./middleware/getStatistics');

const router = new Router();

router.post('/vente-produit', checkIfUserIsMarchand, createOfferProcess)

router.get('/statistics', checkIfUserIsAdmin, getStatistics)

router.put('/achat/validate', checkIfUserIsMarchand, validateAchat)

router.put('/offre/statut/:id', checkIfUserIsMarchand, updateOfferStatus)

router.put('/validate-vente', checkIfUserIsTechnicien, validateVente)

module.exports = router;