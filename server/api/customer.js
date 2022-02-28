const express = require("express")
const router = express.Router()
const pool = require('../server')
const db = require('../db/db')

router.route('/').get(async (req,res) => {
    pool.query("SELECT * FROM customer", (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
})

db.query("SELECT * FROM customers").then(rows => console.log(rows))

module.exports = router