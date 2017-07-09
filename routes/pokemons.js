'use strict'

const express = require('express')
const routes = express.Router()
const Pokemon = require('../model/pokemon')
const pokemonValidation = require('../middleware/pokemon-validation')
const pagarme = require('../model/pagarme');

routes.get('/', function (req, res) {
  Pokemon.findAll()
    .then(function listOfPokemons (pokemons) {
      res.send(pokemons)
    })
})

routes.post('/', pokemonValidation.createPokemon, function (req, res) {
  Pokemon.create(req.body)
    .then(function sendPokemon (pokemon) {
      res.send(pokemon)
    })
})

routes.put('/:id', pokemonValidation.updatePokemon, function (req, res) {
  Pokemon.update(
    req.body,
    { where: { id: req.params.id } }
  )
  .then(function (pokemon) {
    Pokemon.findById(req.params.id).then(function (pokemon) {
      res.send(pokemon)
    })
  })
})

routes.put('/buy/:id', pokemonValidation.buyPokemon, function (req, res) {
  Pokemon.findOne({
    where: {
      id: req.params.id
    }
  })
  .then( function (pokemon) {
    pagarme.buy(req, res, pokemon)
  })
})

module.exports = routes
