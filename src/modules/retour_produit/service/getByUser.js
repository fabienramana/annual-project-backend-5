const { getRetoursByUserEmail } = require('../repository')

module.exports = (email) => {

    return getRetoursByUserEmail(email)
}