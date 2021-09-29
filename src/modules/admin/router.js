const { Router } = require('express');
const createTechnicien = require('./middleware/createTechnicien');
const checkIfUserIsAdmin = require('../../services/checkIfUserIsAdmin');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien')
const getAllTechniciens = require('./middleware/getAllTechniciens');
const deleteTechnicien = require('./middleware/deleteTechnicien');

const router = new Router();

router.post('/create-technicien', checkIfUserIsAdmin, createTechnicien)

router.get('/users/:role', checkIfUserIsTechnicien, getAllTechniciens)

router.delete('/user/:id', checkIfUserIsAdmin, deleteTechnicien)

module.exports = router;