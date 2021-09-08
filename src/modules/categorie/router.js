const { Router } = require('express');
const createCategorie = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne')
const deleteOne = require('./middleware/deleteOne')
const getAll = require('./middleware/getAll')

const router = new Router();

router.route('/categories')
.get(getAll)

router.route('/categorie/:id')
.put(updateOne)
.delete(deleteOne);

router.route('/categorie')
.post(createCategorie);

module.exports = router;