const { Router } = require('express');
const updateOne = require('./middleware/updateOne');

const router = new Router();

router.route('/offre/:id')
.put(updateOne);

module.exports = router;