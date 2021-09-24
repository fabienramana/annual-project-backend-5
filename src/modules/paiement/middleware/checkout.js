const checkout = require('../service/checkout');
const { getProduitsByIds:findProduitsByIds} = require('../../produit/repository');
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {

    const ids = req.body;
    console.log(ids);
    const itemsToGet = await findProduitsByIds(ids);  // get items by ids [0,2,3,.....]
    console.log(itemsToGet);
    date = '2021/09/21'
    const achat = {
        date: '2021/09/21',
        utilisateur_id: 1,
        achat_produit_id: 1,
        transaction_id:  bcrypt.hashSync(Date.now().toString(), 10)
    }

    console.log(achat);
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

    console.log(JSON.stringify(items));
    try {
        const url = await checkout(items, achat.transaction_id);
        res.status(201).json( url ) 
    } catch(err){
        next(err);
    }
}