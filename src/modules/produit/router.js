const { Router } = require('express');

const createProduit = require('./middleware/createProduit')
const updateProduit = require('./middleware/updateProduit');
const deleteProduit = require('./middleware/deleteProduit');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand')

const router = new Router();

router.put('/produit/:id', checkIfUserIsTechnicien, updateProduit)

router.delete('/produit/:id', checkIfUserIsTechnicien, deleteProduit)

router.post('/produit', checkIfUserIsMarchand, createProduit)

module.exports = router;