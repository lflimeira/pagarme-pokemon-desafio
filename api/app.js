'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const validator = require('express-validator')
const pokemons = require('./routes/pokemons')
const token = require('./routes/token')
const customValidators = require('./middleware/custom-validators')
const Config = require('./config')
const allowCors = require('./middleware/cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(validator({ customValidators: customValidators }))
app.use(allowCors)

app.use('/pokemons', pokemons)

app.use('/token', token)

app.use(function (req, res) {
  res.status(404).json({
    error: 'Not Found'
  })
})

app.listen(Config.server.port, function () {
  console.log('Listening on http://' + Config.server.host + ':' + Config.server.port)
})
