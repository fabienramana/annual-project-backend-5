const { Router } = require('express');
const createTechnicien = require('./middleware/createTechnicien');
const checkIfUserIsAdmin = require('../../services/checkIfUserIsAdmin');
const getAllTechniciens = require('./middleware/getAllTechniciens');

const router = new Router();

router.post('/create-technicien', checkIfUserIsAdmin, createTechnicien)

router.get('/users/role', checkIfUserIsAdmin, getAllTechniciens)

module.exports = router;