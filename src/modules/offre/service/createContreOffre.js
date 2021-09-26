const { findOffreById, createOffre } = require('../repository')

module.exports = async (id, prix) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
    
    const offre = await findOffreById(id)
    await createOffre(date_string, prix, offre.venteId)
    return "done"
}