const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.route('/').get((req, res) => {
    res.send("This is the customers endpoint!")
})

router.route('/:customerID').get(async (req,res) => {
    const rows = await db.query('SELECT customer_id, first_name, last_name FROM customers WHERE customer_id=?', req.params.customerID)
    res.json(rows)
})

router.route(':/customerID/pets').get(async(req,res) => {
  // const rows = await pool.query("")
})

module.exports = router;