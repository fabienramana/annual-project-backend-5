const { getRetourByTransactionId } = require("../repository");
const updateOne = require("./updateOne");


module.exports = async (key) => {
    const retour = await getRetourByTransactionId(key);
    if(retour.status !== 'En attente') {
        return "already done"
    }
    const status = {
        statut: 'Payé'
    }
    await updateOne(status, retour.id);
    return "done"
}