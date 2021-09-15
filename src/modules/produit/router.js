const { Router } = require('express');

const createProduit = require('./middleware/createProduit')
const findProduitById = require('./middleware/findProduitById')
const getAllProduit = require('./middleware/getAllProduit');
const updateProduit = require('./middleware/updateProduit');
const deleteProduit = require('./middleware/deleteProduit');

const router = new Router();

router.route('/produits')
.get(getAllProduit)

router.route('/produit/:id')
.get(findProduitById)
.put(updateProduit)
.delete(deleteProduit);

router.route('/produit')
.post(createProduit);

module.exports = router;