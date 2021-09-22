const { createModel } = require('../../models/associationModel')
const connect =  require('../../../client/mysql');
const bcrypt = require('bcrypt');
//const checkIfEmailExists = require('./checkIfEmailExists');
//const checkIfUserEmailExists = require('../../user/service/checkIfEmailExists');
//const checkIfRnaExistsBase = require('./checkIfRnaExistsBase');
const checkIfRnaExistsAPI = require('./checkIfRnaExistsAPI');
const { findIfRnaExistsBase, findIfEmailExists, createAssociation } = require('../repository');
const { findIfEmailExists: findIfUserEmailExists } = require('../../user/repository')

module.exports = (nom, rna, email, password) => {

    if (password == null) {
        const err = new Error("Aucun password n'est défini");
        err.name = 'Internal Error';
        err.status = 500;
        throw err;
    }

    const encryptedPassword = bcrypt.hashSync(password, 10);
    const association = {
        nom,
        rna,
        email,
        password: encryptedPassword
    }

    return createModel.validate(association)
    .then(() => findIfEmailExists(email))
    .then(() => findIfUserEmailExists(email))
    .then(() => checkIfRnaExistsAPI(rna))
    .then(() => findIfRnaExistsBase(rna))
    .then(() => createAssociation(nom, rna, email, encryptedPassword))
}