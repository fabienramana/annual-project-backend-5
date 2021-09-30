const { Router } = require('express');
//const deleteOne = require('./middleware/deleteOne');
const getAll = require('./middleware/getAll');
const findProjetsByAssociation = require('./middleware/getAssociationByEmail')

const router = new Router();

router.route('/associations')
.get(getAll);

router.route('/association')
.get(findProjetsByAssociation)

module.exports = router;