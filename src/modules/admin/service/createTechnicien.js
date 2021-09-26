const { createTechnicienModel } = require('../../models/userModel')
const { createUserWithRole } = require('../../user/repository')
const bcrypt = require('bcrypt')

module.exports = async (user) => {

    const encryptedPassword = bcrypt.hashSync('GR@2021', 10);
    user.password = encryptedPassword
    user.role = "Technicien"

    return createTechnicienModel.validate(user)
    .then(() => createUserWithRole(user))
}