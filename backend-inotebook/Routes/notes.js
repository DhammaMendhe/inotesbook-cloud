const express = require("express");
const router = express.Router();
const Notes = require("../Models/Notes");
const fetchUser = require("../middleware/fetchUser");


//get all notes from stored data using '/api/notes/fetchAllNotes using get request 
//it's not sensative data we can use post request and login is required

router.get('/fetchAllNotes',fetchUser,async (req,res)=>{
    const notes =await Notes.find({user: req.user.id});

    res.json([{notes:"this are notes"}]);
})


//get all notes from storde data using '/api/notes/fetchAllNotes using get request 
//it's not sensative data we can use post request and login is required

router.get('/fetchAllNotes',fetchUser,async (req,res)=>{
  
    const notes =await Notes.find({user: req.user.id});
    res.json([]);
})

module.exports = router;