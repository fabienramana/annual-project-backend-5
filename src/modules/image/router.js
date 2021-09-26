const { Router } = require('express');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const createOne = require('./middleware/createOne');
const findByProduit = require('./middleware/findByProduit');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.post('/image', checkIfUserIsTechnicien, createOne)

router.put('/image/:id', checkIfUserIsTechnicien, updateOne)

router.get('/image/produit/:id', checkIfUserIsTechnicien, findByProduit)

module.exports = router;