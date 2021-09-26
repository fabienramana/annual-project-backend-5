const { Router } = require('express');

const createOne = require('./middleware/createOne')
const getAll = require('./middleware/getAll')
const findOneById = require('./middleware/findOneById')
const updateOne = require('./middleware/updateOne')
const deleteOne = require('./middleware/deleteOne');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');


const router = new Router();

router.get('/unites', checkIfUserIsMarchand, getAll)

router.get('/unite/:id', checkIfUserIsTechnicien, findOneById)

router.put('/unite/:id', checkIfUserIsTechnicien, updateOne)

router.delete('/unite/:id', checkIfUserIsTechnicien, deleteOne)

router.post('/unite', checkIfUserIsTechnicien, createOne)

module.exports = router;