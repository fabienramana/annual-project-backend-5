const { Router } = require('express');
const createOne = require('./middleware/createOne');
//const deleteOne = require('./middleware/deleteOne');
const login = require('./middleware/login')

const router = new Router();

router.route('/association')
.post(createOne);

router.route('/association/login')
.post(login);


module.exports = router;