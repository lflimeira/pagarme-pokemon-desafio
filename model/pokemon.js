'use strict'

const Sequelize = require('sequelize')
const sequelize = require('../db')

const Pokemon = sequelize.define('pokemon', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stock: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 1
  }
})

Pokemon.sync({force: false}).then(function () {
  console.log('Pokemon table is ready!')
},
function (err) {
  console.log('An error occurred while creating the table:', err)
})

module.exports = Pokemon
