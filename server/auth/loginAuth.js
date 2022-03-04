const bcrypt = require("bcrypt")
const db = require('../db/db')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const cookieExpiry = 10 * 60 * 1000 // 10 minute 

const loginAuth = async (req, res, next) => {
    const {email, password} = req.body;
    const checkAccount = await db.query("SELECT customer_id, email, password FROM customers WHERE email = ?", [email], (err, result) => {
        if (!err) {
            return result 
        }
        else (console.log(err))
        next()
    })
    
    if (checkAccount.length !== 0) {
        var {customer_id, password: hashedPassword} = checkAccount[0]
        bcrypt.compare(password, hashedPassword, (err, hash) => {
            if(!err) {
                if (hash) {
                    res.locals.message = "Authenticated"
                    const token = jwt.sign(
                        {
                            customer_id, email
                        }, process.env.TOKEN_SECRET
                    )
                    res.cookie("token", token, { httpOnly: true, maxAge: cookieExpiry })
                    next()
                } 
                res.locals.message = "Username or password incorrect" 
                next()
            }
            console.log(err)
        })
    }
    else {
        res.locals.message = "Username or password incorrect"
        next()
    }
}


module.exports = loginAuth