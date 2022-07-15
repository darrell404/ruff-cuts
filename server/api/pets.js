const express = require('express')
const app = express()
const router = express.Router()
const db = require('../db/db')
const isAuthorised = require('../auth/auth')
const { response } = require('express')

router.route('/').get((req, res) => {
    res.send("This is the pets endpoint!")
})

router.route('/userpets').get(isAuthorised, async (req,res) => {
    const { customer_id } = res.locals.jwt
    const pets = await db.query('SELECT pets.pet_id, pets.pet_name, pets.pet_breed FROM pets WHERE owner_id=?', customer_id)
    res.json(pets)
})

router.post('/addpets', isAuthorised, async(req, res) => {
    const { customer_id } = res.locals.jwt
    const { name, breed, age } = req.body
    try {
        const addPet = await db.query('INSERT INTO pets (pet_name, owner_id, pet_breed, pet_age) VALUES (?,?,?,?)', [name, customer_id, breed, age])
        res.json({"message": "Data added successfully", "status": "success"})
    }
    catch(e) {
        console.log(e)
        res.json({"message": "Error in adding pet", "status": "error"})
    }

})

router.get('/fetchPet/:id', isAuthorised, async(req,res) => {
    const { customer_id } = res.locals.jwt
    const pet_id = parseInt(req.params.id)
    try {
        const fetchOnePet = await db.query('SELECT pet_id, pet_name, pet_breed, pet_age FROM pets WHERE owner_id=? AND pet_id=?', [customer_id, pet_id])
        if (fetchOnePet.length == 0) {
            res.json({"message": "Pet not found"})
        }
        else {
            res.json(fetchOnePet)
        }
    }
    catch(e) {
        console.log(e)
    }
})

module.exports = router;