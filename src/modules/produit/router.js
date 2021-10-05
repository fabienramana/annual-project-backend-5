const { Router } = require('express');

const createProduit = require('./middleware/createProduit')
const updateProduit = require('./middleware/updateProduit');
const deleteProduit = require('./middleware/deleteProduit');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand')
const checkIfUserIsAdmin = require('../../services/checkIfUserIsAdmin');
const getProduitsByDepot = require('./middleware/getProduitsByDepot');

const router = new Router();

router.put('/produit/:id', checkIfUserIsTechnicien, updateProduit)

router.delete('/produit/:id', checkIfUserIsTechnicien, deleteProduit)

router.post('/produit', checkIfUserIsMarchand, createProduit)

router.get('/produits/depot/:id', checkIfUserIsAdmin, getProduitsByDepot)

module.exports = router;