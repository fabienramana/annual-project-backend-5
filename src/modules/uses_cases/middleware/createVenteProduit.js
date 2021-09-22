const createVenteProduit = require('../service/createVenteProduit');

module.exports = (req, res, next) => {
    //vente
    const { statut } = req.body
    const { date } = req.body

    const vente = {
        statut,
        date
    }
    //produit
    const { titre } = req.body.produit
    const { description } = req.body.produit
    const { etat } = req.body.produit
    const { categorie } = req.body.produit
    const produitStatut = req.body.produit.statut

    const produit = {
        titre,
        description,
        etat,
        categorie_id: categorie,
        statut: produitStatut
    }
    //carac
    const { produitCaracteristiques } = req.body.produit

    //images
    const { images } = req.body.produit
    

    createVenteProduit(vente, produit, images, produitCaracteristiques)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}