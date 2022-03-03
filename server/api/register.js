const express = require("express")
const router = express.Router()
const lookupUser = require('../auth/createUser')

router.post('/', lookupUser, async (req, res) => {
    res.json({"message": res.locals.message})
  })

module.exports = router