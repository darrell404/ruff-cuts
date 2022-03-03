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
        return
    }
    createUser(firstname, lastname, email, password)
    res.locals.message = "Created"
    next()
}

const createUser = (firstname, lastname, email, password) => {
    const salt = 10;
    try {
        bcrypt.hash(password, salt, async (err, hash) => {
            if (!err) {
                const createRecord = await db.query("INSERT INTO customers (first_name, last_name, email, password) VALUES (?,?,?,?)", [firstname, lastname, email, hash], (err, rows) => {
                    if(!err) {
                        return(rows)
                    }
                    throw error
                })
            }
            console.log(err)
         })   
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = lookupUser