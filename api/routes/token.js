'use strict'

const express = require('express')
const routes = express.Router()
const Config = require('../config')
const jwt = require('jsonwebtoken')

routes.get('/', function (req, res) {
  let token = jwt.sign(Config.security.payload, Config.security.secret_key, {expiresIn: Config.security.token_expire})
  res.send({ token: token })
})

module.exports = routes
