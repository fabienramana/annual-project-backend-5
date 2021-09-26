const { Router } = require('express');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const createOne = require('./middleware/createOne');
const deleteOne = require('./middleware/deleteOne');
const findOneById = require('./middleware/findOneById');

const router = new Router();

router.post('/colis', checkIfUserIsTechnicien, createOne)

router.get('/colis/:id', findOneById)

module.exports = router;