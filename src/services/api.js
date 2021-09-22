const { Router } = require('express');

const basicsRouter = require('../modules/basic/router');
const userRouter = require('../modules/user/router');
const categorieRouter = require('../modules/categorie/router')
const depotRouter = require('../modules/depot/router')
const uniteRouter = require('../modules/unite/router')
const caracteristique_techRouter = require('../modules/caracteristiques_tech/router')
const productRouter = require('../modules/produit/router')
const paiement = require('../modules/paiement/router')
const achatRouter = require('../modules/achat/router')
const colisRouter = require('../modules/colis/router')
const greenCoinRouter = require('../modules/green_coin/router')
const achatProduiRouter = require('../modules/achat_produit/router')
const imageRouter = require('../modules/image/router')
const investmentRouter = require('../modules/invest_green_coin/router')
const projetRouter = require('../modules/projet/router')
const associationRouter = require('../modules/association/router')
const evenementRouter = require('../modules/evenement/router')
const venteRouter = require('../modules/vente/router')
const useCasesRouter = require('../modules/uses_cases/router')


const router = new Router();

router.use('/api', basicsRouter);
router.use('/api', userRouter);
router.use('/api', categorieRouter);
router.use('/api', depotRouter)
router.use('/api', uniteRouter)
router.use('/api', caracteristique_techRouter)
router.use('/api', productRouter)
router.use('/api', paiement)
router.use('/api', achatRouter)
router.use('/api', colisRouter)
router.use('/api', greenCoinRouter)
router.use('/api', achatProduiRouter)
router.use('/api', imageRouter)
router.use('/api', investmentRouter)
router.use('/api', projetRouter)
router.use('/api', associationRouter)
router.use('/api', evenementRouter)
router.use('/api', venteRouter)
router.use('/api', useCasesRouter)

module.exports = router;