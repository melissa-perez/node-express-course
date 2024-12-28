const auth = (req, res, next) => {
    const cookie = req.cookies.name
    if(cookie) {
        req.user = cookie
        next()
    }
    res.status(401).json({success: false, message: "Unauthorized"})
}

module.exports = auth