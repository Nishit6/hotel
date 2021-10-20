const mongoose = require('mongoose');





const roomArray = [

    {
        
        roomNo:01,
        bookingDate:13-10-2021,
        roomType:'AC',
        floor:02
        
        
    }
  
    
]

 function seed (){

    Room.insertMany(roomArray)
   
 .then(()=>{
        console.log("Data Seeded Successfully....");
    })
    
.catch((err)=>{
        console.log(err);
        console.log("Seeding Error");
    })
}


module.exports = seed;