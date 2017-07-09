'use strict'


const request = require('request-promise')
const Config = require('../config')

const pagarme = {}

pagarme.buy = function (req, res, pokemon){
    if (pokemon.stock < req.body.quantity) {
      return res.status(400).send({
        error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock
      })
    }
    request({
      uri: Config.pagarme.uri,
      method: 'POST',
      json: {
        api_key: Config.pagarme.api_key,
        amount: pokemon.price * req.body.quantity,
        card_number: req.body.card_number,
        card_expiration_date: req.body.card_exp_date,
        card_holder_name: req.body.card_holder_name,
        card_cvv: req.body.card_cvv,
        metadata: {
          product: 'pokemon',
          name: pokemon.name,
          quantity: req.body.quantity
        }
      }
    })
    .then(function (body) {
      if (body.status === 'paid') {
        pokemon.stock = pokemon.stock - req.body.quantity
        pokemon.save()
          .then(function (pokemon) {
            res.send(body)
          })
      }
    })
    .catch(function (err) {
      console.log(JSON.stringify(err, null, 4))
      return res.status(err.response.statusCode).send(err.response.body)
    })
}

module.exports = pagarme