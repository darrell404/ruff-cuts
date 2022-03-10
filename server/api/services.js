const express = require("express")
const router = express.Router()
const db = require('../db/db')

router.get('/', async (req, res) => {
    const services = await db.query('SELECT services.service_name, services.service_duration, prices.original_price_value FROM services INNER JOIN prices ON prices.price_id = services.service_price_id')
    res.json(services)
  })

module.exports = router