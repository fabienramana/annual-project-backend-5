const { Router } = require('express');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');

const createOne = require('./middleware/createOne')
//const deleteOne = require('./middleware/deleteOne')
const getAll = require('./middleware/getAll');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.put('/prix_vente/:id', checkIfUserIsTechnicien, updateOne)

router.post('/prix_vente', checkIfUserIsTechnicien, createOne)

router.get('/prix_vente', checkIfUserIsMarchand, getAll)

module.exports = router;