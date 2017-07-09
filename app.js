'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const validator = require('express-validator')
const pokemons = require('./routes/pokemons')
const customValidators = require('./middleware/custom-validators')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(validator({ customValidators: customValidators }))

app.use('/pokemons', pokemons)

app.use(function (req, res) {
  res.status(404).json({
    error: 'Not Found'
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:3000')
})
