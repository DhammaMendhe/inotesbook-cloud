const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const {body,validationResult} =require('express-validator');

router.post('/',
    
    [body('name','enter a proper name').notEmpty().isLength({min:3}),
    body('email','enter a proper email').notEmpty().isEmail( ),
    body('password','password must contain atleast 5 letters ').notEmpty().isLength({min:5})],


 (req, res) => {

    // console.log(req.body)
    // const user = User(req.body);
    // user.save()
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(user=> res.json(user))
    .catch((error)=>{
        console.log(error) ;
         res.json({error:'send a unique email',
            message : error.message
         });
    })

    // res.send(req.body)
    // const result = validationResult(req);
    // if (result.isEmpty()) {
    //   return res.send(`Hello, ${req.query.person}!`);
    // }
  
    // res.send({ errors: result.array() });

})
module.exports = router;