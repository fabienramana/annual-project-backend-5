const { Router } = require('express');
const getAllUsers = require('./middleware/getAllUsers');
const createUser = require('./middleware/createUser');

const router = new Router();

router.route('/users')
.get(getAllUsers)
.post(createUser);

module.exports = router;