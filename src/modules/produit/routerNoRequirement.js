const { Router } = require('express');

const findProduitById = require('./middleware/findProduitById')
const getAllProduit = require('./middleware/getAllProduit');

const router = new Router();

router.route('/produits')
.get(getAllProduit)

router.route('/produit/:id')
.get(findProduitById)

module.exports = router;