const { Router } = require('express');

const createOne = require('./middleware/createOne')
const deleteOne = require('./middleware/deleteOne')

const router = new Router();

router.route('/prix_vente/:id')
.delete(deleteOne)

router.route('/prix_vente')
.post(createOne);

module.exports = router;