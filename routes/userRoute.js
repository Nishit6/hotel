const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');
const {isAuthorized} = require('../middlewares/authorized')


router.get('/',(req,res)=>{

    res.render('home')
})

router.get('/showGuest',isAuthorized,async(req,res)=>{

    try{
        const guest = await Guest.find({});

        res.render('guests/guest',{guest})
    }catch (error) {
        console.log("error");
        req.flash('error','Invalid Operation');
        res.redirect('/error');
    } 

})

router.get('/newGuest',isAuthorized,async(req,res)=>{

   

    res.render('guests/newGuest');
})







router.post('/newGuest',isAuthorized,async(req,res)=>{

    try{
        await Guest.create(req.body);
        req.flash('success','Guest Created Successfully');
        res.redirect('/showGuest');
    
    }catch (error) {
        console.log("error");
        req.flash('error','Invalid Operation');
        res.redirect('/error');
       }
        

    
})

router.get('/details/:id',isAuthorized,async(req,res)=>{

   const item = await Guest.findById(req.params.id);

    res.render('guests/detail',{item})
})



router.get('/guest/:id/edit',isAuthorized,async(req,res)=>{

    const guest = await Guest.findById(req.params.id);
       
        res.render('guests/edit',{guest});
     
})

router.patch('/guest/:id',isAuthorized,async(req,res)=>{

    try{
        const guest = await Guest.findByIdAndUpdate(req.params.id,req.body);
        req.flash('success','Guest Updated Successfully');
        res.redirect('/showGuest');
     
    }catch (error) {
        console.log("error");
        req.flash('error','Invalid Operation');
        res.redirect('/error');
       }
        

    
})

router.delete('/guest/:id',isAuthorized,async(req,res)=>{

    try{
        await Guest.findByIdAndDelete(req.params.id);
       
        res.redirect('/showGuest');
     
    }catch (error) {
        console.log("error");
        req.flash('error','Invalid Operation');
        res.redirect('/error');
       }


})










module.exports=router;