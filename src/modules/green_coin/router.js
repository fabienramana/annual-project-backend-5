const { Router } = require('express');
const createOne = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne');
const findByUser = require('./middleware/findByUser');

const router = new Router();

router.route('/green_coin')
.post(createOne);

router.route('/green_coin/:id')
.put(updateOne);

router.route('/green_coin/user/:id')
.get(findByUser)

module.exports = router;