const { Router } = require('express');
const createCategorie = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne')
const deleteOne = require('./middleware/deleteOne')
const getAll = require('./middleware/getAll');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');


const router = new Router();

router.get('/categories', checkIfUserIsMarchand, getAll)

router.post('/categorie', checkIfUserIsTechnicien, createCategorie)

router.put('/categorie/:id', checkIfUserIsTechnicien, updateOne)

router.delete('/categorie/:id', checkIfUserIsTechnicien, deleteOne)

module.exports = router;