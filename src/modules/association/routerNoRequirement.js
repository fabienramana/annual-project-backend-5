const { Router } = require('express');
const createOne = require('./middleware/createOne');
//const deleteOne = require('./middleware/deleteOne');

const router = new Router();

router.route('/association')
.post(createOne);


module.exports = router;