const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({


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
            phone:{
                type:Number,
                required:true,
                trim:true,
                unique:true
            },
            join:{
                type:Date
            }
           



})

const Employee = mongoose.model('Employee',employeeSchema);

module.exports = Employee;