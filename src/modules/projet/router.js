const { Router } = require('express');

const createOne = require('./middleware/createOne');
const findOneById = require('./middleware/findOneById');
const getAll = require('./middleware/getAll');
const findProjetsByAssociation = require('./middleware/findProjetsByAssociation')

const router = new Router();

router.route('/projets')
.get(getAll)

router.route('/projets/association')
.get(findProjetsByAssociation)

router.route('/projet')
.post(createOne);

router.route('/projet/:id')
.get(findOneById)

module.exports = router;