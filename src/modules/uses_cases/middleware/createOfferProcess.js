const createOfferProcess = require('../service/createOfferProcess');

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
    const { categorieId } = req.body.produit
    const produitStatut = req.body.produit.statut

    const produit = {
        titre,
        description,
        etat,
        categorieId: categorieId,
        statut: produitStatut
    }
    //carac
    const { produitCaracteristiques } = req.body.produit

    //images
    const { images } = req.body.produit
    
    const user = decodeToken(req)
    var email = user.email
    createOfferProcess(vente, produit, images, produitCaracteristiques, email)
        .then((status) => {
            res.status(201).json({
                status
            })
        })
        .catch((err) => {
        next(err);
        });
}