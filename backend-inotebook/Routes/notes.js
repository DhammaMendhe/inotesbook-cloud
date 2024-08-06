const express = require("express");
const router = express.Router();


router.get('/',(req,res)=>{
    const obj = {
        title:'main title',
        discription:"this is notes that i want to takckla nd add into it",
    }

    res.json(obj);
})

module.exports = router;