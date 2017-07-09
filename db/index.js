'use strict'

const Sequelize = require('sequelize')
const sequelize = new Sequelize('pokemons', null, null, {
  dialect: 'sqlite',
  storage: './database.sqlite'
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
