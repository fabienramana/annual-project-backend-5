const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findFailed = require('./middleware/findFailed');
const findOneById = require('./middleware/findOneById');
const findOnHold = require('./middleware/findOnHold');
const findSuccess = require('./middleware/findSuccess');
const getAllByUser = require('./middleware/getAllByUser');
const updateOne = require('./middleware/updateOne');
const getVenteInfos = require('./middleware/getVenteInfos');

const router = new Router();

router.route('/vente')
.post(createOne);

router.route('/vente/:id')
.put(updateOne)
.get(findOneById)

router.route("/vente/infos/:id")
.get(getVenteInfos)

router.route('/ventes/en-cours')
.get(findOnHold)

router.route('/ventes/annule')
.get(findFailed)

router.route('/ventes/termine')
.get(findSuccess)

router.route('/ventes/user/:id')
.get(getAllByUser)

module.exports = router;