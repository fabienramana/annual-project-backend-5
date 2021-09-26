const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findOneById = require('./middleware/findOneById');
const getAllByUser = require('./middleware/getAllByUser');

const router = new Router();

router.route('/achat')
.post(createOne);


router.route('/achats/user/:email')
.get(getAllByUser)

router.route('/achat/:id')
.get(findOneById)

module.exports = router;