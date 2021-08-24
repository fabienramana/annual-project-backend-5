const { Router } = require('express');
const getAllUsers = require('./middleware/getAllUsers');

const router = new Router();

router.route('/users')
.get(getAllUsers);

module.exports = router;