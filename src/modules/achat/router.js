const { Router } = require('express');
const createOne = require('./middleware/createOne');
const deleteOne = require('./middleware/deleteOne');
const findOneById = require('./middleware/findOneById');
const getAll = require('./middleware/getAll');

const router = new Router();

router.route('/achat')
.post(createOne);

router.route('/achats')
.get(getAll)

router.route('/achat/:id')
.delete(deleteOne)
.get(findOneById)

module.exports = router;