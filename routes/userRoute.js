const express = require('express');
const router = express.Router();
const Guest = require('../models/guest')




router.get('/showGuest',async(req,res)=>{

    const guest = await Guest.find({});

    res.render('guests/guest',{guest})
})

router.get('/newGuest',async(req,res)=>{

   

    res.render('guests/newGuest');
})


router.get('/newRoom',(req,res)=>{

    

    res.render('rooms/newRoom');

})





router.post('/newGuest',async(req,res)=>{

    await Guest.create(req.body);

    res.redirect('/showGuest');

})

router.get('/details/:id',async(req,res)=>{

   const item = await Guest.findById(req.params.id);

    res.render('guests/detail',{item})
})



router.get('/guest/:id/edit',async(req,res)=>{

    const guest = await Guest.findById(req.params.id);
       
        res.render('guests/edit',{guest});
     
})

router.patch('/guest/:id',async(req,res)=>{

    const guest = await Guest.findByIdAndUpdate(req.params.id,req.body);
       
        res.redirect('/showGuest');
     
})

router.delete('/guest/:id',async(req,res)=>{

   await Guest.findByIdAndDelete(req.params.id);
       
        res.redirect('/showGuest');
     
})





router.post('/details/:id/rooms/:id',async(req,res)=>{

  res.send(req.params)
  
})




module.exports=router;