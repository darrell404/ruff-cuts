const bcrypt = require('bcrypt')
const db = require('../db/db')

const lookupUser = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body
    const lookup = await db.query('SELECT customer_id FROM customers WHERE email = ?', [ email ], (err, rows) => {
        if(!err) {
            return rows
        }
        throw error
    })
    if (lookup.length !== 0) {
        res.locals.message = "User already exists"
        next()
    }
    createUser(firstname, lastname, email, password)
    res.locals.message = "Created"
    next()
}

const createUser = async (firstname, lastname, email, password) => {
    console.log("Creating user")
    try {
        const createRecord = await db.query("INSERT INTO customers (first_name, last_name, email, password) VALUES (?,?,?,?)", [firstname, lastname, email, password], (err, rows) => {
            if(!err) {
                return(rows)
            }
            throw error
        })
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = lookupUser