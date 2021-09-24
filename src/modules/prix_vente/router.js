const { Router } = require('express');

const createOne = require('./middleware/createOne')
const deleteOne = require('./middleware/deleteOne')
const getAll = require('./middleware/getAll');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/prix_vente/:id')
.delete(deleteOne)
.put(updateOne)

router.route('/prix_vente')
.post(createOne);

router.route('/prix_vente')
.get(getAll);

module.exports = router;