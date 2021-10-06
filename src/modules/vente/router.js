const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findFailed = require('./middleware/findFailed');
const findOneById = require('./middleware/findOneById');
const findOnHold = require('./middleware/findOnHold');
const findSuccess = require('./middleware/findSuccess');
const getAllByUser = require('./middleware/getAllByUser');
const updateOne = require('./middleware/updateOne');
const getVenteInfos = require('./middleware/getVenteInfos');
const checkIfUserIsTechnicien = require('../../services/checkIfUserIsTechnicien');
const checkIfUserIsMarchand = require('../../services/checkIfUserIsMarchand');
const findOnDeliveryWait = require('./middleware/findOnDeliveryWait');

const router = new Router();

router.post('/vente', checkIfUserIsMarchand, createOne)

router.put('/vente/:id', checkIfUserIsTechnicien, updateOne)

router.get('/vente/:id', checkIfUserIsMarchand, findOneById)

router.get("/vente/infos/:id", checkIfUserIsMarchand, getVenteInfos)

router.get('/ventes/en-cours', checkIfUserIsTechnicien, findOnHold)

router.get('/ventes/annule', checkIfUserIsTechnicien, findFailed)

router.get('/ventes/waiting-for-product', checkIfUserIsTechnicien, findOnDeliveryWait)

router.get('/ventes/termine', checkIfUserIsTechnicien, findSuccess)

router.get('/ventes/user/:email', checkIfUserIsMarchand, getAllByUser)

module.exports = router;