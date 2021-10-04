const { getRetourById } = require("../repository")
const bcrypt = require('bcrypt');
const updateOne = require("./updateOne");
const checkout = require("../../paiement/service/checkout");


module.exports = async (id) => {

    const retour = await getRetourById(id);
    console.log(retour);
    const transactionId = bcrypt.hashSync(retour.id.toString()+retour.titre, 10)
    console.log(retour);
    updateOne({transactionId}, retour.id)
    const items = [
        {
            price_data: {
                currency: 'eur',
                product_data: {
                    name: 'Paiement colis de retour'
                },
                unit_amount: (retour.prix * 100)
            },
            quantity: 1
        }
    ];
    const urlSuccess = 'http://localhost:4200/compte?key='+transactionId
    const urlError = 'http://localhost:4200/paiement/error'
    
    const url = await checkout(items, urlSuccess, urlError);
    console.log(url);
    return url;

}