const jwt = require("jsonwebtoken")
require('dotenv').config()

const isAuthorised = (req, res, next) => {
    if (req.cookies.token) {
        try {
            var verifyToken = jwt.verify(req.cookies.token, process.env.TOKEN_SECRET)
            res.locals.jwt = verifyToken
            return next()
        }
        catch(err) {
            if (req.cookies.refreshToken) {
                try {
                    var verifyRefreshToken = jwt.verify(req.cookies.refreshToken, process.env.REFRESH_TOKEN_SECRET)
                    const { customer_id, email } = verifyRefreshToken
                    const newAccessToken = jwt.sign(
                        {
                            customer_id, email
                        }, process.env.TOKEN_SECRET,
                        {
                            expiresIn: '15m'
                        }
                    )
                    res.cookie("token", newAccessToken, { httpOnly: true })
                    res.locals.jwt = jwt.decode(newAccessToken)
                    return next()
                }
                catch(err) {
                    res.locals.msg = {"message": "Not logged in"}
                    return next()
                }
            }
        }
    }
    res.locals.msg = {"message": "Not logged in"}
    return next()
}

module.exports = isAuthorised