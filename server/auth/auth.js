const jwt = require("jsonwebtoken")
require('dotenv').config()

const isAuthorised = (req, res, next) => {
    const userToken = req.cookies.token
    jwt.verify(userToken, process.env.TOKEN_SECRET, (err, jwtVerified) => {
        if (!err) {
            res.locals.jwt = jwtVerified
            next()
            return
        }
        res.status(400).send({
         "message": "Error with token"   
        })
        return
    })
}

module.exports = isAuthorised