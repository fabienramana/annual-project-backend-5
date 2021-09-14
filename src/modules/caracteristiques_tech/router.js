const { Router } = require('express');
const createOne = require('./middleware/createOne');
const getAll = require('./middleware/getAll');
const deleteOne = require('./middleware/deleteOne');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/caracteristiques_tech')
.get(getAll);

router.route('/caracteristique_tech')
.post(createOne);

router.route('/caracteristique_tech/:id')
.delete(deleteOne)
.put(updateOne);

module.exports = router;