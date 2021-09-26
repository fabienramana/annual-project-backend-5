const { Router } = require('express');
const createOne = require('./middleware/createOne');
//const deleteOne = require('./middleware/deleteOne');
const getAll = require('./middleware/getAll');

const router = new Router();

router.route('/association')
.post(createOne);

router.route('/associations')
.get(getAll);

module.exports = router;