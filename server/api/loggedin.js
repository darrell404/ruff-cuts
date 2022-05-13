const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
require('dotenv').config()

router.route('/').get((req,res) => {
    if(req.cookies.token) {
        const userToken = req.cookies.token
        const verifyToken = jwt.verify(userToken, process.env.TOKEN_SECRET)
        res.send(verifyToken)
    }
    else res.send({"message": "Not logged in"})
})

module.exports = router;