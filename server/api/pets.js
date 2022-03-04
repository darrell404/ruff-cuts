const express = require('express')
const app = express()
const router = express.Router()
const db = require('../db/db')
const isAuthorised = require('../auth/auth')

router.route('/').get((req, res) => {
    res.send("This is the pets endpoint!")
})

router.route('/userpets').get(isAuthorised, async (req,res) => {
    const { customer_id } = res.locals.jwt
    console.log(customer_id)
    const pets = await db.query('SELECT pets.pet_name FROM pets WHERE owner_id=?', customer_id)
    res.json(pets)
})

module.exports = router;