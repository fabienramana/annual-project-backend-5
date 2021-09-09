const { Router } = require('express');
const getAllUsers = require('./middleware/getAllUsers');
const createUser = require('./middleware/createUser');
const login = require('./middleware/login')
const getUserInfos = require('./middleware/getUserInfos')
const updateOne = require('./middleware/updateOne')
const switchMarchand = require('./middleware/switchMarchand')
const switchAdmin = require('./middleware/switchAdmin')
const switchTechnique = require('./middleware/switchTechnique')

const router = new Router();

router.route('/users')
.get(getAllUsers);

router.route('/user/:id/marchand/switch/')
.post(switchMarchand)

router.route('/user/:id/admin/switch/')
.post(switchAdmin)

router.route('/user/:id/technique/switch/')
.post(switchTechnique)

router.route('/user/:id')
.get(getUserInfos)
.put(updateOne);

router.route('/user')
.post(createUser);

router.route('/login')
.post(login);

module.exports = router;