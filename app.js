const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
//const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
//const errorHandler = require('errorhandler');

const users = require('./routes/api/users');
//Configure mongoose.Promise to global Promise
//mongoose.Promise = global.Promise;


const app = express();

//Configure App
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Configure mongoose
mongoose.connect('mongodb://localhost/webdream', {useNewUrlParser:true});
mongoose.set('debug', true);


 // const passport = require('passport');
 // const LocalStrategy = require('passport-local').Strategy;
 // app.use(passport.initialize());
 // app.use(passport.session());

 // var User = require('./models/Users');
 // passport.use(new LocalStrategy(User.authenticate()));
 // passport.serializeUser(User.serializeUser());
 // passport.deserializeUser(User.deserializeUser());
// app.use((err, req, res) => {
//   res.status(err.status || 500);

//   res.json({
//     errors: {
//       message: err.message,
//       error: {},
//     },
//   });
// });
app.use("/api/users", users);

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));