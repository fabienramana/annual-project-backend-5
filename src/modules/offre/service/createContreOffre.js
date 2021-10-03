const { createOffre, updateOffre, findOffreByVenteId } = require('../repository')
const { findVenteById } = require('../../vente/repository')

module.exports = async (id, prix) => {
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
    
    const vente = await findVenteById(id)
    const offres = await findOffreByVenteId(vente.id)
    console.log(offres[0].id)
    await updateOffre({statut: "Refusé"}, offres[0].id)
    await createOffre(date_string, prix, vente.id)
    return "done"
}