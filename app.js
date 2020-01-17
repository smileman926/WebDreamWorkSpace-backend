require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
//const errorHandler = require('errorhandler');
//const { CLIENT_ORIGIN } = require('./config')

//Configure mongoose.Promise to global Promise
//mongoose.Promise = global.Promise;


const app = express();

//Configure App
var graphqlHTTP = require('express-graphql');
var schema = require('./graphql/boardSchemas');
app.use(cors());
// app.use(cors({
//   origin: CLIENT_ORIGIN
// }))

app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: global,
  graphiql: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const google = require('./routes/api/google');

//Configure mongoose
mongoose.connect('mongodb://localhost/webdream', {useNewUrlParser:true});
mongoose.set('debug', true);

// app.use(require('express-session')({
//     secret: 'chatroom',
//     resave: false,
//     saveUninitialized: false
// }));
  const passport = require('./passport');
  //const LocalStrategy = require('passport-local').Strategy;
  const users = require('./routes/api/users');
  app.use(passport.initialize());
  app.use(passport.session());

  //const User = require('./models/Users');
  //passport.use(new LocalStrategy(User.authenticate()));
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
app.use('/', google)

app.listen(3000, () => console.log('Server running on http://localhost:3000/'));