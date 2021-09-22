const { Router } = require('express');

const createVenteProduit = require('./middleware/createVenteProduit')

const router = new Router();

router.route('/vente-produit')
.post(createVenteProduit);

module.exports = router;