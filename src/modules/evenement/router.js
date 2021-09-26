const { Router } = require('express');
const checkIfUserIsAdmin = require('../../services/checkIfUserIsAdmin');
const createOne = require('./middleware/createOne');
//const deleteOne = require('./middleware/deleteOne');

const router = new Router();

router.post('/evenement', checkIfUserIsAdmin, createOne)


module.exports = router;