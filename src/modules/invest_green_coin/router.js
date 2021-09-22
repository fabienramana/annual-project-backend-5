const { Router } = require('express');
const createInvestment = require('./middleware/createInvestment');

const router = new Router();

router.route('/investment')
.post(createInvestment);


module.exports = router;