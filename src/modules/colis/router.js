const { Router } = require('express');
const createOne = require('./middleware/createOne');
const deleteOne = require('./middleware/deleteOne');
const findOneById = require('./middleware/findOneById');
const getAll = require('./middleware/getAll');

const router = new Router();

router.route('/colis')
.post(createOne)
.get(getAll)

router.route('/colis/:id')
.delete(deleteOne)
.get(findOneById)


module.exports = router;