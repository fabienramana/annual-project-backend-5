const { Router } = require('express');
const createOne = require('./middleware/createOne');
const getAll = require('./middleware/getAll');
const deleteOne = require('./middleware/deleteOne');
const updateOne = require('./middleware/updateOne');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');

const router = new Router();

router.get('/caracteristiques_tech', checkIfUserIsMarchand, getAll)

router.post('/caracteristique_tech', checkIfUserIsTechnicien, createOne)

router.delete('/caracteristique_tech/:id', checkIfUserIsTechnicien, deleteOne)

router.put('/caracteristique_tech/:id', checkIfUserIsTechnicien, updateOne)

module.exports = router;