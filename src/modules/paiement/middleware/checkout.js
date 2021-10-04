const checkout = require('../service/checkout');
const { getProduitsByIds:findProduitsByIds} = require('../../produit/repository');
const bcrypt = require('bcrypt')
const createAchat = require('../../achat/service/createOne')
const createAchatProduit = require('../../achat_produit/service/createOne')

module.exports = async (req, res, next) => {

    const{ ids } = req.body;
    console.log(ids);
    const itemsToGet = await findProduitsByIds(ids);  // get items by ids [0,2,3,.....]
    console.log(itemsToGet);
    const dateToday = new Date()
    const date_string = dateToday.getFullYear() + "-" + (dateToday.getMonth() +1) + "-" + dateToday.getDate()
    const achat = {
        date: date_string,
        utilisateurId: 1,
        transactionId:  bcrypt.hashSync(Date.now().toString(), 10)
    }
    console.log(achat);
    const achatId = await createAchat(achat)
    console.log("achatId " + achatId)
    console.log(typeof(achatId))
    for(const product of itemsToGet){
        await createAchatProduit(achatId, product.id)
    }
    const items = [];
    itemsToGet.forEach(obj => {
        let item = 
        {
            price_data: {
                currency: 'eur',
                product_data: {
                    name: obj.description
                },
                unit_amount: (obj.prix * 100)
            },
            quantity: 1
        }
        items.push(item);
    });
    const urlSuccess = 'http://localhost:4200/paiement/success?key='+achat.transactionId
    const urlError = 'http://localhost:4200/paiement/error?key='+achat.transactionId

    console.log(JSON.stringify(items));
    try {
        const url = await checkout(items, urlSuccess, urlError);
        res.status(201).json( url ) 
    } catch(err){
        next(err);
    }
}