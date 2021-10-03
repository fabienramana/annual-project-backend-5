const { Router } = require('express');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');
const updateOne = require('./middleware/updateOne');
const getByUser = require('./middleware/getByUser')


const router = new Router();

router.put('/retour_produit/:id', checkIfUserIsMarchand, updateOne)

router.get('/retour_produit/:email', checkIfUserIsMarchand, getByUser)

module.exports = router;