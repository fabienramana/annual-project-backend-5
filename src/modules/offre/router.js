const { Router } = require('express');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const updateOne = require('./middleware/updateOne');
const createContreOffre = require('./middleware/createContreOffre')

const router = new Router();

router.put('/offre/:id', checkIfUserIsTechnicien, updateOne)

router.post('/contre-offre/:id', checkIfUserIsTechnicien, createContreOffre)

module.exports = router;