const { Router } = require('express');
const createOne = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne');
const deleteOne = require('./middleware/deleteOne');
const getAll = require('./middleware/getAll')

const router = new Router();

router.route('/depots')
.get(getAll);

router.route('/depot/:id')
.put(updateOne)
.delete(deleteOne);

router.route('/depot')
.post(createOne);

module.exports = router;