const { Router } = require('express');
const createOne = require('./middleware/createOne');

const router = new Router();

router.route('/investment')
.post(createOne);


module.exports = router;