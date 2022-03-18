const express = require('express')
const app = express()
const router = express.Router()
const db = require('../db/db')
const isAuthorised = require('../auth/auth')

router.route('/').get((req, res) => {
    res.send("This is the pets endpoint!")
})

router.route('/userpets').get(isAuthorised, async (req,res) => {
    console.log(req.headers)
    const { customer_id } = res.locals.jwt
    const pets = await db.query('SELECT pets.pet_name FROM pets WHERE owner_id=?', customer_id)
    res.json(pets)
})

router.post('/addpets', isAuthorised, async(req, res) => {
    const { customer_id } = res.locals.jwt
    const { name, breed, age } = req.body
    try {
        const addPet = await db.query('INSERT INTO pets (pet_name, owner_id, pet_breed, pet_age) VALUES (?,?,?,?)', [name, customer_id, breed, age])
        res.json({"message": "Data added successfully"})
    }
    catch(e) {
        console.log(e)
        res.json({"message": "Error in adding pet"})
    }

})

module.exports = router;