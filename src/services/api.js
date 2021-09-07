const { Router } = require('express');
const basicsRouter = require('../modules/basic/router');
const userRouter = require('../modules/user/router');
const categorieRouter = require('../modules/categorie/router')

const router = new Router();

router.use('/api', basicsRouter);
router.use('/api', userRouter);
router.use('/api', categorieRouter);

module.exports = router;