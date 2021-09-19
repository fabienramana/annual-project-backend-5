const checkout = require('../service/checkout');
const produits = require('../../produit/service/findProduitsByIds');
const findProduitsByIds = require('../../produit/service/findProduitsByIds');

module.exports = async (req, res, next) => {

    const ids = req.body;
    console.log(ids);
    const itemsToGet = await findProduitsByIds(ids);  // get items by ids [0,2,3,.....]
    console.log(itemsToGet);
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
        const url = await checkout(items);
        res.status(201).json( url ) 
    } catch(err){
        next(err);
    }
}