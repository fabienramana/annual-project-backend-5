const { Router } = require('express');
const createUser = require('./middleware/createUser');
const login = require('./middleware/login')

const router = new Router();

router.route('/user')
.post(createUser);

router.route('/login')
.post(login);

module.exports = router;