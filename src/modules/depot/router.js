const { Router } = require('express');
const createOne = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne');
const deleteOne = require('./middleware/deleteOne');
const getAll = require('./middleware/getAll')
const findOneById = require('./middleware/findOneById');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');

const router = new Router();

router.get('/depots', checkIfUserIsTechnicien, getAll)

router.put('/depot/:id', checkIfUserIsTechnicien, updateOne)

router.get('/depot/:id', checkIfUserIsTechnicien, findOneById)

router.delete('/depot/:id', checkIfUserIsTechnicien, deleteOne)

router.post('/depot', checkIfUserIsTechnicien, createOne)

module.exports = router;