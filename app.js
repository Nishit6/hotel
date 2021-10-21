if(process.env.Node_ENV!== "production"){
    require('dotenv').config();
}


const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Guest = require('./models/guest');
const User = require('./models/user')
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');


const seedDB = require('./seed');


mongoose.connect(process.env.DB_URL , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log(err);
    console.log("Connection Error");
})

// routes

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute')





app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));



//  Sessions for flash messages
const sessionConfig = {

    secret:'thisisasecret',
    resave:false,
    saveUninitialized:true,
}

app.use(session(sessionConfig));
app.use(flash());

// initializing passport and sessions..

app.use(passport.initialize());
app.use(passport.session());

// configuring local passport

passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{

    res.locals.success = req.flash('success');
    
    res.locals.error = req.flash('error');
    
    res.locals.currentUser = req.user;
  
    res.locals.isRetailer = req.user;
    next();
})


// routes

app.use(userRoute);
app.use(authRoute);

// seedDB();





app.listen(process.env.PORT || 3000,(req,res)=>{

    console.log("Server Running at Port 3000..")

})