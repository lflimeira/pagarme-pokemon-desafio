'use strict'

const validation = {}

validation.createPokemon = function (req, res, next) {
    req.checkBody("name", "A name is required." ).notEmpty();
    req.checkBody("price", "A price is required.").notEmpty().gte(0);

    let errors = req.getValidationResult().then(function (result) {
        if(!result.isEmpty()){
            res.status(400).send({"error": result.array()[0].msg})
            return
        }
        next()
    })
}

validation.updatePokemon = function (req, res, next) {
    req.checkParams("id", "A valid id is required." ).isInt();
    
    let errors = req.getValidationResult().then(function (result) {
        if(!result.isEmpty()){
            res.status(400).send({"error": result.array()[0].msg})
            return
        }
        next()
    })
}

validation.hasStock = function (req, res, pokemon, next){
    if (pokemon.stock < req.body.quantity) {
      return res.status(400).send({
        error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock
      })
    }
    next()
}

module.exports = validation