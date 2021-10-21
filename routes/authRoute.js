const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/user')
const passport = require('passport');
const path = require('path');


// registering New user

router.get('/register',(req,res)=>{


    res.render('auth/singup');
})

router.post('/register',async(req,res)=>{

    try{


      
        
        
        
        const user =  new  User
        ({
            email:req.body.email,
            username:req.body.username,
            firstName:req.body.firstname,
            lastName:req.body.lastname,
            address:req.body.address,
            phone:req.body.phone,
          
    });
    const newUser = await User.register(user,req.body.password);
    console.log(newUser);
    req.flash('success','Registered Successfully');
    res.redirect('/login');}
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register');
    }

})

// logging in a user

router.get('/login',(req,res)=>{

    
    res.render('auth/login');
})


router.post('/login',
  passport.authenticate('local',
                                 { 
                                   failureRedirect: '/login',
                                   failureFlash: true }
                                   
),(req,res)=>{
   
    req.flash('success','Logged in Successfully!!');
    res.redirect('/');
});

// logging out

router.get('/logout',(req,res)=>{

    req.logOut();
    req.flash('success','Logged out Successfully!!');
    res.redirect('/login');
})



module.exports = router;

module.exports=router;