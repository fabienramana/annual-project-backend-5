const { Router } = require('express');
const checkIfUserIsAdministrateur = require('../../services/checkIfUserIsAdmin');
const getAllUsers = require('./middleware/getAllUsers');
const getUserInfos = require('./middleware/getUserInfos')
const updateOne = require('./middleware/updateOne')

const router = new Router();

router.get('/users', checkIfUserIsAdministrateur, getAllUsers)

router.route('/user/:email')
.get(getUserInfos)
.put(updateOne);


module.exports = router;