const { Router } = require('express');
const basicsRouter = require('../modules/basic/router');
const userRouter = require('../modules/user/router');
const categorieRouter = require('../modules/categorie/router')
const depotRouter = require('../modules/depot/router')
const uniteRouter = require('../modules/unite/router')
const caracteristique_techRouter = require('../modules/caracteristiques_tech/router')
const productRouter = require('../modules/produit/router')
const achatRouter = require('../modules/achat/router')
const colisRouter = require('../modules/colis/router')

const router = new Router();

router.use('/api', basicsRouter);
router.use('/api', userRouter);
router.use('/api', categorieRouter);
router.use('/api', depotRouter)
router.use('/api', uniteRouter)
router.use('/api', caracteristique_techRouter)
router.use('/api', productRouter)
router.use('/api', achatRouter)
router.use('/api', colisRouter)

module.exports = router;