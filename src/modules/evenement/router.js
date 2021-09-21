const { Router } = require('express');
const createOne = require('./middleware/createOne');
const deleteOne = require('./middleware/deleteOne');

const router = new Router();

router.route('/evenement')
.post(createOne);

router.route('/evenement/:id')
.delete(deleteOne)

module.exports = router;