const { Router } = require('express');

const createOne = require('./middleware/createOne')
const getAll = require('./middleware/getAll')
const findOneById = require('./middleware/findOneById')
const updateOne = require('./middleware/updateOne')

const router = new Router();

router.route('/unites')
.get(getAll);

router.route('/unite/:id')
.get(findOneById)
.put(updateOne)

router.route('/unite')
.post(createOne);

module.exports = router;