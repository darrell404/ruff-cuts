const express = require('express')
const app = express()
const mariadb = require('mariadb')
const pool = mariadb.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5
})

pool.getConnection((err, connection) => {
    if(err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection lost')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log("Database has too many connections")
        } 
        if (err.code === 'ECONNREFUSED') {
            console.log("Database connection refused")
        }
    }
})

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})