const express = require('express')
const isAuthorised = require('../auth/auth')
const router = express.Router()
const db = require('../db/db')

router.route('/').get((req,res) => {
    res.send("This is the bookings endpoint!")
})

router.post('/add', isAuthorised, async (req, res) => {
    const { customer_id } = res.locals.jwt
    const { name, service, date, time } = req.body
    const queryPetID = await db.query('SELECT pet_id FROM pets WHERE owner_id = ? and pet_name = ?', [ customer_id, name ])
    const pet_id = await queryPetID[0].pet_id
    const bookAppointment = await db.query('INSERT into bookings (booking_date, pet_id, owner_id, booking_time) VALUES (?,?,?,?)', [date, pet_id, customer_id, time])
})

module.exports = router;