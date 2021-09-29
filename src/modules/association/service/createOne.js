const { createModel } = require('../../models/associationModel')
const bcrypt = require('bcrypt');
const checkIfRnaExistsAPI = require('./checkIfRnaExistsAPI');
const { findIfRnaExistsBase, findIfEmailExists, createAssociation } = require('../repository');
const { findIfEmailExists: findIfUserEmailExists } = require('../../user/repository')

module.exports = (nom, rna, email, password, logo) => {

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
        logo,
        email,
        password: encryptedPassword
    }

    return createModel.validate(association)
    .then(() => findIfEmailExists(email))
    .then(() => findIfUserEmailExists(email))
    .then(() => checkIfRnaExistsAPI(rna))
    .then(() => findIfRnaExistsBase(rna))
    .then(() => createAssociation(nom, rna, email, encryptedPassword, logo))
}