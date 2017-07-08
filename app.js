'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const request = require('request-promise')
const pokemons = require('./routes/pokemons')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/pokemons', pokemons)

app.use(function (req, res) {
  res.status(404).json({
    error: 'Not Found'
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:3000')
})
