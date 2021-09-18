const { Router } = require('express');

const checkout = require('./middleware/checkout')

const router = new Router();

router.route('/checkout')
.post(checkout);

module.exports = router;