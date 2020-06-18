const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect("mongodb://localhost/log",{useNewUrlParser: true, useUnifiedTopology: true});
//set up auth routes
app.use('/auth',authRoutes);
app.use('/profile', profileRoutes);
// create home route
app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});


app.listen(3000,process.env.IP,function(){
         console.log("server started!!");  
});