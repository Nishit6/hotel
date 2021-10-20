const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({


            FirstName:{
                type:String,
                trim:true,
                required:true
            },
            LastName:{
                type:String,
                trim:true,
                required:true
            },
            address:{
                type:String,
                trim:true,
                required:true
            },
            age:{
                type:Number,
                trim:true,
                required:true
            },
            city:{
                type:String,
                trim:true,
                required:true
            },
           country:{
                type:String,
                trim:true,
                required:true
            },
            phone:{
                type:Number,
                required:true,
                trim:true,
                unique:true
            },
            gender:{
                type:String,
                required:true
            },
          
          
           bookingDate:{
                type:Date,
                required:true
           }, 
           roomNo:{
               type:Number,
               trim:true,
               required:true
           },
         floor:{
             type:Number,
             required:true
         },
           roomType:{
               type:String,
               required:true
           },

          
       






})

const Guest = mongoose.model('Guest',guestSchema);

module.exports = Guest;