const { Router } = require('express');
const createOne = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne');
const findByUser = require('./middleware/findByUser');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');

const router = new Router();

router.post('/green_coin', checkIfUserIsTechnicien, createOne)

router.put('/green_coin/:id', checkIfUserIsTechnicien, updateOne)

router.route('/green_coin/user')
.get(findByUser)

module.exports = router;