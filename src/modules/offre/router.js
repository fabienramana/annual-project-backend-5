const { Router } = require('express');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');
const updateOne = require('./middleware/updateOne');
const createContreOffre = require('./middleware/createContreOffre');
const findOffresByUser = require('./middleware/findOffresByUser')

const router = new Router();

router.put('/offre/:id', checkIfUserIsTechnicien, updateOne)

router.post('/contre-offre/:id', checkIfUserIsTechnicien, createContreOffre)

router.get('/offres/user/:id', checkIfUserIsMarchand, findOffresByUser)

module.exports = router;