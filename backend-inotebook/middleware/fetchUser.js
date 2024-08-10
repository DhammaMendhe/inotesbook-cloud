const { header } = require('express-validator');
const jwt = require('jsonwebtoken');
const jtw_secret = "iamhappywith$this";


const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    // console.log(token)

    try {
        const data = jwt.verify(token, jtw_secret);
        req.user = data.user;
        // console.log(req.user)
        // console.log(data.user)
        // console.log(data);
        next();
    } catch (error) {
        res.status(401).send("please authenticate using proper token");
    }

}

module.exports= fetchUser; 