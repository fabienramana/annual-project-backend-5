const { Router } = require('express');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');

const updateOne = require('./middleware/updateOne');


const router = new Router();

router.put('/retour_produit/:id', checkIfUserIsMarchand, updateOne)

module.exports = router;