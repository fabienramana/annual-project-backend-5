const { Router } = require('express');

const findProduitById = require('./middleware/findProduitById')
const getAllProduit = require('./middleware/getAllProduit');
const findSellablesProduits = require('./middleware/findSellablesProduits');

const router = new Router();

router.route('/produits')
.get(getAllProduit)

router.route('/produit/:id')
.get(findProduitById)

router.route('/produits/a-vendre')
.get(findSellablesProduits)

module.exports = router;