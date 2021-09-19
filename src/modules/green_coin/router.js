const { Router } = require('express');
const createOne = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/green_coin')
.post(createOne);

router.route('/green_coin/:id')
.put(updateOne);

module.exports = router;