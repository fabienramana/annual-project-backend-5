const bcrypt = require('bcrypt')
const { createModel } = require('../../models/userModel')
const {findIfEmailExists: checkIfAssociationEmailExists} = require('../../association/repository')
const {findIfEmailExists: checkIfEmailExists, createUser: createOne} = require('../repository')

module.exports = (nom, prenom, email, password, adresse, dateNaissance, codePostal, ville) => {

    if (password == null) {
        const err = new Error("Aucun password n'est défini");
        err.name = 'Internal Error';
        err.status = 500;
        throw err;
      }

      const encryptedPassword = bcrypt.hashSync(password, 10);
      const user = {
          nom,
          prenom,
          email,
          dateNaissance ,
          password: encryptedPassword,
          adresse,
          codePostal,
          ville
      }
    return createModel.validate(user)
    .then(() => checkIfEmailExists(email))
    .then(() => checkIfAssociationEmailExists(email))
    .then(() => createOne(nom, prenom, email, dateNaissance, encryptedPassword, adresse, codePostal, ville))
}