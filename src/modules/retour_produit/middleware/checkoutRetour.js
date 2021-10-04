const acceptRetour = require('../service/checkoutRetour')

module.exports = async (req, res, next) => {
    try {

        const { id } = req.body;
        const status = await acceptRetour(id);
        res.json(status)
    } catch (err) {
        console.log(err)
        next(err)
    }

}