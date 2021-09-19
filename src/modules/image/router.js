const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findByProduit = require('./middleware/findByProduit');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/image')
.post(createOne);

router.route('/image/:id')
.put(updateOne)

router.route('/image/produit/:id')
.get(findByProduit)

module.exports = router;