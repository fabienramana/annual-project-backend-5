const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findByAchatId = require('./middleware/findByAchatId');
const findByProduitId = require('./middleware/findByProduitId');

const router = new Router();

router.route('/achat_produit')
.post(createOne);

router.route('/achat_produit/achat/:id')
.get(findByAchatId);

router.route('/achat_produit/produit/:id')
.get(findByProduitId);


module.exports = router;