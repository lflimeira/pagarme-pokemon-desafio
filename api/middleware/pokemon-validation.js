'use strict'

const validation = {}

validation.createPokemon = function (req, res, next) {
  req.checkBody('name', 'A name is required.').notEmpty()
  req.checkBody('price', 'A valid price is required.').notEmpty().gte(0)
  req.checkBody('stock', 'A valid stock is required.').optional().gte(0).isInt()

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send({'error': result.array()[0].msg})
      return
    }
    next()
  })
}

validation.updatePokemon = function (req, res, next) {
  req.checkParams('id', 'A valid id is required.').isInt()
  req.checkBody('name', 'A name is required.').optional()
  req.checkBody('price', 'A valid price is required.').optional().gte(0)
  req.checkBody('stock', 'A valid stock is required.').optional().gte(0).isInt()

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send({'error': result.array()[0].msg})
      return
    }
    next()
  })
}

validation.buyPokemon = function (req, res, next) {
  req.checkParams('id', 'A valid id is required.').isInt()
  req.checkBody('quantity', 'A valid quantity is required.').notEmpty().isInt()
  req.checkBody('card_number', 'A card number is required.').notEmpty()
  req.checkBody('card_exp_date', 'The card expiration date is required.').notEmpty()
  req.checkBody('card_holder_name', 'The holder name is required.').notEmpty()
  req.checkBody('card_cvv', 'The card cvv is required.').notEmpty()

  req.getValidationResult().then(function (result) {
    if (!result.isEmpty()) {
      res.status(400).send({'error': result.array()[0].msg})
      return
    }
    next()
  })
}

module.exports = validation
