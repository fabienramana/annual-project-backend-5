const { Router } = require('express');
const createCategorie = require('./middleware/createOne');
const updateOne = require('./middleware/updateOne')
const deleteOne = require('./middleware/deleteOne')

const router = new Router();


router.route('/categorie/:id')
.post(updateOne)
.delete(deleteOne);

router.route('/categorie')
.post(createCategorie);

module.exports = router;