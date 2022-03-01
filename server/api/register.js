const express = require("express")
const router = express.Router()
const lookupUser = require('../auth/createUser')
const db = require('../db/db')

router.post('/', lookupUser, async (req, res) => {
    res.json({"message": res.locals.message})
  })

module.exports = router