const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const isAuthorised = require('../auth/auth')
require('dotenv').config()

router.route('/').get(isAuthorised, (req, res) => {
    if (res.locals.jwt) {
        try {
            const decodeToken = jwt.decode(req.cookies.token)
            res.send(decodeToken)
        }
        catch(err) {
            res.send(res.locals.msg)
        }
    }
    else {
        res.send(res.locals.msg)
    }
})

module.exports = router;