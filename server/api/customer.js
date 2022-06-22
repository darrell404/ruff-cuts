const express = require('express')
const isAuthorised = require('../auth/auth')
const router = express.Router()
const db = require('../db/db')

router.route('/').get((req, res) => {
    res.send("This is the customers endpoint!")
})

router.route('/info').get(isAuthorised, async (req,res) => {
    const {customer_id} = res.locals.jwt
    const rows = await db.query('SELECT customer_id, first_name, last_name FROM customers WHERE customer_id=?', customer_id)
    res.json(rows)
})

router.route('/:customerID/pets').get(async (req,res) => {
    const pets = await db.query('SELECT pets.pet_name FROM pets WHERE owner_id=?', req.params.customerID)
    res.json(pets)
})

module.exports = router;