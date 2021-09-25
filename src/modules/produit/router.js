const { Router } = require('express');

const createProduit = require('./middleware/createProduit')
const updateProduit = require('./middleware/updateProduit');
const deleteProduit = require('./middleware/deleteProduit');
const findSellablesProduits = require('./middleware/findSellablesProduits');

const router = new Router();

router.route('/produit/:id')
.put(updateProduit)
.delete(deleteProduit);

router.route('/produits/a-vendre')
.get(findSellablesProduits)

router.route('/produit')
.post(createProduit);

module.exports = router;