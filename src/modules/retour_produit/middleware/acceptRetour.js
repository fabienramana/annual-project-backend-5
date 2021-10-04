const acceptRetour = require("../service/acceptRetour");

module.exports = async (req, res, next) => {
    try {
        const { key } = req.body
        const status = await acceptRetour(key)
        res.json(status)
    } catch (err) {
        next(err)
    }
}