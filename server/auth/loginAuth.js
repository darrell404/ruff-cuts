const bcrypt = require("bcrypt")
const db = require('../db/db')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const loginAuth = async (req, res, next) => {
    const {email, password} = req.body;
    var checkAccount

    try {
        checkAccount = await db.query("SELECT customer_id, email, password FROM customers WHERE email = ?", [email])
    }
    catch(err) {
        console.log(err)
        return
    }

    if (checkAccount.length !== 0) {
        var {customer_id, password: hashedPassword} = checkAccount[0]
        const verifyJWT = await bcrypt.compare(password, hashedPassword)
        if (verifyJWT) {
            res.locals.message = "Authenticated"
            const accessToken = jwt.sign(
                {
                    customer_id, email
                }, process.env.TOKEN_SECRET,
                {
                    expiresIn: '15m'
                }
            )

            const refreshToken = jwt.sign(
                {
                    customer_id, email
                }, process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn: '30d'
                }
            )

            res.cookie("token", accessToken, { httpOnly: true })
            res.cookie("refreshToken", refreshToken, { httpOnly: true })  
            } 
        else res.locals.message = "Username or password incorrect"
    }
    next()
}


module.exports = loginAuth