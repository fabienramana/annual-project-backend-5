const { Router } = require('express');

const createOne = require('./middleware/createOne');
const findOneById = require('./middleware/findOneById');
const getAll = require('./middleware/getAll');


const router = new Router();

router.route('/projets')
.get(getAll)

router.route('/projet')
.post(createOne);

router.route('/projet/:id')
.get(findOneById)

module.exports = router;