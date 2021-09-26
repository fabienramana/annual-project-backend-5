const { Router } = require('express');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.put('/offre/:id', checkIfUserIsTechnicien, updateOne)

module.exports = router;