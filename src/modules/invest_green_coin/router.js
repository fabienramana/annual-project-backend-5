const { Router } = require('express');
const createInvestment = require('./middleware/createInvestment');
const getInvestmentByProject = require('./middleware/getInvestmentByProject');

const router = new Router();

router.route('/investment')
.post(createInvestment);

router.route('/investments/projet/:id')
.get(getInvestmentByProject);


module.exports = router;