const { Router } = require('express');
const getAllUsers = require('./middleware/getAllUsers');
const createUser = require('./middleware/createUser');
const login = require('./middleware/login')
const getUserInfos = require('./middleware/getUserInfos')
const updateOne = require('./middleware/updateOne')

const router = new Router();

router.route('/users')
.get(getAllUsers);

router.route('/user/:id')
.get(getUserInfos)
.put(updateOne);

router.route('/user')
.post(createUser);

router.route('/login')
.post(login);

module.exports = router;