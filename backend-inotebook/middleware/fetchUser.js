const { header } = require('express-validator');
const jwt = require('jsonwebtoken');
const jtw_secret = "iamhappywith$this";


const fetchUser = (req, res, next) => {
    const token = req.header('auth-token');
    try {

        const data = jwt.verify(token, jtw_secret);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).js
    }

}

module.exports= fetchUser; 