const { createModel } = require('../../models/investmentModel')
const connect =  require('../../../client/mysql');
const { findGreenCoinsByUser: findByUser} = require('../../green_coin/repository')
const findOneByEmail = require('../../user/service/findOneByEmail')
const updateGreenCoin = require('../../green_coin/service/updateOne')
const createOne = require('./createOne')

module.exports = (investment, email) => {
    
    var green_coins = [];
    return findOneByEmail(email)
    .then((user) => findByUser(user.id))
    .then((gc) => {
        return new Promise(function(resolve, reject){
            console.log("length" + gc.length)
            var montant = 0;
            for(let i=0;i<gc.length;i++){
                montant += gc[i].montant_restant
                green_coins.push(gc[i])
                if(investment.amount <= montant){
                    break;
                }
            }
            resolve(green_coins)
        })
    })
    .then(()=> createModel.validate(investment))
    .then(function(){
        return new Promise(function(resolve, reject){
            console.log("gc length"+green_coins.length)
            for(let i=0; i<green_coins.length;i++){
                if(green_coins[i].montant_restant == investment.amount){
                    console.log("equal")
                    createOne(green_coins[i].montant_restant, investment.projet_id, green_coins[i].id)
                    .then((message) => console.log(message))
                    investment.amount -= green_coins[i].montant_restant 
                    updateGreenCoin({
                        montant_restant: 0
                    },
                    green_coins[i].id)
                    .then(() => console.log('update done'))
                }
                else if(green_coins[i].montant_restant > investment.amount){
                    console.log('green_coins[i].montant_restant > investment.amount')
                    createOne(investment.amount, investment.projet_id, green_coins[i].id)
                    .then((message) => console.log(message))
                    updateGreenCoin({
                        montant_restant: green_coins[i].montant_restant - investment.amount
                    },
                    green_coins[i].id)
                    .then(() => console.log('update done'))
                    investment.amount -= green_coins[i].montant_restant
                }
                else if(green_coins[i].montant_restant < investment.amount){
                    console.log("green_coins[i].montant_restant < investment.amount")
                    createOne(green_coins[i].montant_restant, investment.projet_id, green_coins[i].id)
                    .then((message) => console.log(message))
                    investment.amount -= green_coins[i].montant_restant
                    updateGreenCoin({
                        montant_restant: 0
                    },
                    green_coins[i].id)
                    .then(() => console.log('update done'))
                }
                console.log(investment.amount)
                if(investment.amount <= 0){
                    break;
                }
            }

            //var query = `INSERT INTO invest_green_coin (amount, projet_id, green_coin_id) VALUES (${investment.amount}, ${investment.projet_id}, ${investment.green_coin_id})`
            resolve('Investissements effectué')
        })
    })
}