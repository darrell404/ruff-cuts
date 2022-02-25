const express = require('express')
const app = express()
const mariadb = require('mariadb')
require('dotenv').config();

const pool = mariadb.createPool({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    connectionLimit: 5

})

pool.getConnection()
    .then(conn => {
      conn.query("SELECT customer_id, first_name, last_name FROM customers WHERE created_at='2022-02-25'")
        .then((rows) => {
          console.log(rows);
        })
        .then((res) => {
          console.log(res);
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      console.log("Not Connected")
})

app.get('/:customerID', async (req,res) => {
    console.log("Connecting")
    await pool.query('SELECT * FROM customers WHERE customer_id = ?', req.params.customerID, (err, rows) => {
        console.log("Running query")
        if(!err) {
            console.log(rows)
            pool.end()
            res.json(rows)
        }
        else (console.log(err))
    })
})

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})