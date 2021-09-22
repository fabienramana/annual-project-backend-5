const { Router } = require('express');

const createOfferProcess = require('./middleware/createOfferProcess')

const router = new Router();

router.route('/vente-produit')
.post(createOfferProcess);

module.exports = router;