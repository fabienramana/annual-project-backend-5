const checkout = require('../service/checkout');

module.exports = async (req, res, next) => {

    const ids = req.ids;
    const itemsToGet = null;  // get items by ids [0,2,3,.....]
    const items = [];
    itemsToGet.array.forEach(item => {
        const item = 
        {
            price_data: {
                currency: 'eur',
                product_data: {
                    name: item.libelle
                },
                unit_amount: item.prix
            },
            quantity: 1
        }

        items.push(item);
    });
    try {
        const url = await checkout(items);
        res.status(201).json( url ) 
    } catch(err){
        next(err);
    }
}