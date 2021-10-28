const { createModel } = require('../../models/investmentModel')
const { findGreenCoinsByUser: findByUser} = require('../../green_coin/repository')
const {findUserByEmail:findOneByEmail} = require('../../user/repository')
const updateGreenCoin = require('../../green_coin/service/updateOne')
const { createInvestment :createOne } = require('../repository')

module.exports = (investment, email) => {
    
    var green_coins = [];
    return findOneByEmail(email)
    .then((user) => findByUser(user.id))
    .then((gc) => {
        return new Promise(function(resolve, reject){
            var montant = 0;
            for(let i=0;i<gc.length;i++){
                montant += gc[i].montantRestant
                green_coins.push(gc[i])
                if(investment.montant <= montant){
                    break;
                }
            }
            resolve(green_coins)
        })
    })
    .then(()=> createModel.validate(investment))
    .then(function(){
        return new Promise(function(resolve, reject){
            for(let i=0; i<green_coins.length;i++){
                if(green_coins[i].montantRestant == investment.montant){
                    console.log("equal")
                    createOne(green_coins[i].montantRestant, investment.projetId, green_coins[i].id)
                    .then((message) => console.log(message))
                    investment.montant -= green_coins[i].montantRestant 
                    updateGreenCoin({
                        montantRestant: 0
                    },
                    green_coins[i].id)
                    .then(() => console.log('update done'))
                }
                else if(green_coins[i].montantRestant > investment.montant){
                    console.log('green_coins[i].montant_restant > investment.montant')
                    createOne(investment.montant, investment.projetId, green_coins[i].id)
                    .then((message) => console.log(message))
                    updateGreenCoin({
                        montantRestant: green_coins[i].montantRestant - investment.montant
                    },
                    green_coins[i].id)
                    .then(() => console.log('update done'))
                    investment.montant -= green_coins[i].montantRestant
                }
                else if(green_coins[i].montantRestant < investment.montant){
                    console.log("green_coins[i].montant_restant < investment.montant")
                    createOne(green_coins[i].montantRestant, investment.projetId, green_coins[i].id)
                    .then((message) => console.log(message))
                    investment.montant -= green_coins[i].montantRestant
                    updateGreenCoin({
                        montantRestant: 0
                    },
                    green_coins[i].id)
                    .then(() => console.log('update done'))
                }
                console.log(investment.montant)
                if(investment.montant <= 0){
                    break;
                }
            }
            resolve('Investissements effectué')
        })
    })
}