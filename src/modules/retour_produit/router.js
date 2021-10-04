const { Router } = require('express');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');
const updateOne = require('./middleware/updateOne');
const getByUser = require('./middleware/getByUser');
const checkoutRetour = require('./middleware/checkoutRetour');
const refuseRetour = require('./middleware/refuseRetour');
const acceptRetour = require('./middleware/acceptRetour');


const router = new Router();

router.put('/retour_produit/:id', checkIfUserIsMarchand, updateOne)

router.get('/retour_produit/:email', checkIfUserIsMarchand, getByUser)

router.post('/retour/checkout', checkIfUserIsMarchand, checkoutRetour)

router.post('/retour/accept', checkIfUserIsMarchand, acceptRetour)

router.post('/retour/refuse', checkIfUserIsMarchand, refuseRetour)

module.exports = router;