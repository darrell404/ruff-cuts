const express = require('express')
const isAuthorised = require('../auth/auth')
const router = express.Router()
const db = require('../db/db')

router.route('/').get((req,res) => {
    res.send("This is the bookings endpoint!")
})

router.get('/all', isAuthorised, async (req,res) => {
    const { customer_id } = res.locals.jwt
    try {
        const queryAllBookings = await db.query('SELECT bookings.booking_date, bookings.booking_time, pets.pet_name, pets.pet_breed FROM bookings INNER JOIN pets ON bookings.pet_id = pets.pet_id WHERE bookings.owner_id = ?', customer_id)
        console.log(queryAllBookings)
        res.json(queryAllBookings)
    }
    catch(err) {
        console.log(err)
    }
})

router.post('/add', isAuthorised, async (req, res) => {
    const { customer_id } = res.locals.jwt
    const { name, service, date, time } = req.body
    try {
        const queryPetID = await db.query('SELECT pet_id FROM pets WHERE owner_id = ? and pet_name = ?', [ customer_id, name ])
        const pet_id = await queryPetID[0].pet_id
        const bookAppointment = await db.query('INSERT into bookings (booking_date, pet_id, owner_id, booking_time) VALUES (?,?,?,?)', [date, pet_id, customer_id, time])
        await res.json({"success":"Booking has successfully been added!"})
    }
    catch(err) {
        console.log(err)
        res.json({"error":"An error has occured"})
    }
})

module.exports = router;