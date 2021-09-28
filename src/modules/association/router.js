const { Router } = require('express');
//const deleteOne = require('./middleware/deleteOne');
const getAll = require('./middleware/getAll');

const router = new Router();

router.route('/associations')
.get(getAll);

module.exports = router;