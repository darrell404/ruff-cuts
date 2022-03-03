const express = require("express")
const loginAuth = require('../auth/loginAuth')
const router = express.Router()

router.post('/', loginAuth, (req, res) => {
    res.json({"message": res.locals.message})
  })

module.exports = router