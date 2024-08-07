const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const jtw_secret = "iamhappywith$this";
router.post('/',
    //validation for multiple parameters requir array 
    [body('name', 'enter a proper name').notEmpty().isLength({ min: 3 }),
    body('email', 'enter a proper email').notEmpty().isEmail(),
    body('password', 'password must contain atleast 5 letters ').notEmpty().isLength({ min: 5 })],

    async (req, res) => {
        //this is for only practice to save user.
        // console.log(req.body)
        // const user = User(req.body);
        // user.save()

        //if error happens and return bad request and error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            //cheack whether the user and email exits 
            let user = await User.findOne({ email: req.body.email });
            if (user) {

                return res.status(400).json({ errors: "user with this email already exists..." });

            }

            const salt = await bcryptjs.genSalt(10);
            let secPass = await bcryptjs.hash(req.body.password, salt);



            //this must be await because waiting for User creation
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass
            });

            const data = {
                user: { id: user.id }
            }
            const authToken = jwt.sign(data, jtw_secret);

            // console.log(userData);
            res.json({authToken });
            // console.log(user)
            // res.json(user);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("some error occured...");
        }
        //this is new version of validation of req.body
        // res.send(req.body)
        // const result = validationResult(req);
        // if (result.isEmpty()) {
        //   return res.send(`Hello, ${req.query.person}!`);
        // }
        // res.send({ errors: result.array() });
    })
module.exports = router;