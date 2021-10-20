const mongoose = require('mongoose');





const roomArray = [

    {
        
      FirstName:'Nishit ',
      LastName : 'Gaur',
      age:21,
      gender:male,
      phone:7721869369,
      address:'New Govind Nagar',
      city:'ajmer',
      country:'India',
      bookingDate:10-10-2021,
      floor:02,
      roomType:'AC',
      roomNo:01

        
    }, {
        
        FirstName:'Nishit ',
        LastName : 'Gaur',
        age:21,
        gender:male,
        phone:7721869369,
        address:'New Govind Nagar',
        city:'ajmer',
        country:'India',
        bookingDate:10-10-2021,
        floor:02,
        roomType:'AC',
        roomNo:01
  
          
      }, {
        
        FirstName:'Nishit ',
        LastName : 'Gaur',
        age:21,
        gender:male,
        phone:7721869369,
        address:'New Govind Nagar',
        city:'ajmer',
        country:'India',
        bookingDate:10-10-2021,
        floor:02,
        roomType:'AC',
        roomNo:01
  
          
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