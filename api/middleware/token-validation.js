'use stric'

const jwt = require('jsonwebtoken')
const Config = require('../config')

const validation = {}

validation.checkToken = function (req, res, next) {
  let token = req.headers['x-access-token']

  if (token) {
    jwt.verify(token, Config.security.secret_key, function (err, result) {
      if (err) {
        res.status(400).send({'error': 'Invalid token.'})
        return
      }
      next()
    })
  } else {
    res.status(403).send({'error': 'A token is required.'})
  }
}

module.exports = validation
