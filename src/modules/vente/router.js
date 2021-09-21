const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findFailed = require('./middleware/findFailed');
const findOneById = require('./middleware/findOneById');
const findOnHold = require('./middleware/findOnHold');
const findSuccess = require('./middleware/findSuccess');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/vente')
.post(createOne);

router.route('/vente/:id')
.put(updateOne)
.get(findOneById)

router.route('/ventes/en-cours')
.get(findOnHold)

router.route('/ventes/annule')
.get(findFailed)

router.route('/ventes/termine')
.get(findSuccess)

module.exports = router;