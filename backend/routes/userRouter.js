const express = require('express');
const router = express.Router();
const User = require('../models/user-model');

router.get("/get-user", async(req, res)=>{
    try {
        const userEmail = req.body.email;
        const user = await User.findOne(req.body, {
            where : {email : userEmail}
        });
        console.log("user", user);
        
        res.status(200).json(user)
    } catch (error) {
        console.log("Error in Getting  User : ", error);
        res.status(500).json({msg : "Error in Getting User"})
    }
    
})

router.post("/create-user", async(req, res)=>{
    try {
        console.log(req.body)
        const newUser = await  User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        console.log("Error in Creating a User : ", error);
        res.status(500).json({msg : "Error in Creating a User"})
    }
    
})


module.exports = router
