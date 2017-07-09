'use strict'

const server = {
    host: process.env.APP_HOST || 'localhost',
    port: process.env.APP_PORT || '3000'
}

const db = {
    database: process.env.SQLITE_DB || 'pokemons',
    user: process.env.SQLITE_USER || null,
    password: process.env.SQLITE_PASSWORD || null,
    storage: process.env.SQLITE_STORAGE || 'database.sqlite'
}

const pagarme ={
    uri: process.env.PM_URI || 'https://api.pagar.me/1/transactions',
    api_key: process.env.PM_API_KEY || 'ak_test_WHgSu2XFmvoopAZMetV3LfA2RfEEQg'
}

module.exports = {
    server: server,
    db: db,
    pagarme: pagarme
}