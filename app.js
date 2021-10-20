if(process.env.Node_ENV!== "production"){
    require('dotenv').config();
}


const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Guest = require('./models/guest');

const Employee = require('./models/employee');
const seedDB = require('./seed');


mongoose.connect('mongodb://localhost:27017/hotel', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log(err);
    console.log("Connection Error");
})

// routes

const userRoute = require('./routes/userRoute')





app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// routes

app.use(userRoute);

// seedDB();



app.get('/',(req,res)=>{

    res.render('home')
})

app.listen(process.env.PORT || 3000,(req,res)=>{

    console.log("Server Running at Port 3000..")

})