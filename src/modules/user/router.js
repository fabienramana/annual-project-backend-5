const { Router } = require('express');
const getAllUsers = require('./middleware/getAllUsers');
const getUserInfos = require('./middleware/getUserInfos')
const updateOne = require('./middleware/updateOne')

const router = new Router();

router.route('/users')
.get(getAllUsers);

router.route('/user/:id')
.get(getUserInfos)
.put(updateOne);


module.exports = router;