'use strict'

const Sequelize = require('sequelize')
const Config = require('../config');

const sequelize = new Sequelize(Config.db.database, Config.db.user, Config.db.password, {
  dialect: 'sqlite',
  storage: './'+ Config.db.storage
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
