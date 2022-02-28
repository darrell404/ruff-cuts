const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const loginRoute = require('./api/login')
const registerRoute = require('./api/register')
const customerRoute = require('./api/customer')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const db = require('./db/db')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use("/api", router)

router.use('/login', loginRoute)

router.use('/register', registerRoute)

router.use('/customer', customerRoute)

app.listen(5000, () => {
    console.log("Server listening on port 5000")
})
