const mongoose = require('mongoose');
const Guest = require('./models/guest')





const guestArray = [

    {
        
      FirstName:'Nishit ',
      LastName : 'Gaur',
      age:21,
      gender:'Male',
      phone:7721869369,
      address:'New Govind Nagar',
      city:'ajmer',
      country:'India',
      bookingDate:10-10-2021,
      floor:02,
      roomType:'AC',
      roomNo:01

        
    }, {
        
        FirstName:'Manoj ',
        LastName : 'singh',
        age:21,
        gender:'Male',
        phone:7721865339,
        address:'New Govind Nagar',
        city:'ajmer',
        country:'India',
        bookingDate:10-10-2021,
        floor:02,
        roomType:'AC',
        roomNo:09
  
          
      }, {
        
        FirstName:'Priya ',
        LastName : 'mahi',
        age:26,
        gender:'Female',
        phone:776769369,
        address:'New Govind Nagar',
        city:'ajmer',
        country:'India',
        bookingDate:10-10-2021,
        floor:02,
        roomType:'AC',
        roomNo:06
  
          
      }
  
    
]

 function seed (){

    Guest.insertMany(guestArray)
   
 .then(()=>{
        console.log("Data Seeded Successfully....");
    })
    
.catch((err)=>{
        console.log(err);
        console.log("Seeding Error");
    })
}


module.exports = seed;