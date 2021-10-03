const https = require('https')

module.exports = (rna) => {
    return new Promise((resolve, reject)=> {
        const options = {
            hostname: "entreprise.data.gouv.fr",
            path: `/api/rna/v1/id/${rna}`,
            port: 443,
            method: 'GET'
        }

        const req = https.request(options, res =>{

            res.on('data', d => {
                const data = JSON.parse(d)
                if(data.message != null){
                    return reject(new Error("Le numéro RNA n'est pas valide"))
                }
                else{
                    return resolve('ok')
                }
            })
        })

            req.on('error', error => {
            console.error(error)
            return reject(error)
        })

        req.end()
    })

}
