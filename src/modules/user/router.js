const { Router } = require('express');
const getAllUsers = require('./middleware/getAllUsers');
const createUser = require('./middleware/createUser');
const login = require('./middleware/login')

const router = new Router();

router.route('/users')
.get(getAllUsers)
.post(createUser);

router.route('/login')
.post(login);

module.exports = router;