const express = require("express")
const router = express.Router()

router.route('/').post((req,res) => {
    const { firstname, lastname, email, password } = req.body
    console.log("Root Register!")
    console.log(req.body)
    res.send("Data received")
})

module.exports = router