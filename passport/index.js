const passport = require("passport")
const GoogleStratgey = require("./googleStrategy")
const LocalStrategy = require("./LocalStrategy")
const jwtStrategy = require("./jwtStrategy");

passport.serializeUser((user, done) => {
	console.log("=== serialize ... called ===")
	console.log(user) // the whole raw user object!
	console.log("---------")
	done(null, { _id: user._id })
	// done(null, user)
})
// passport.deserializeUser(function(user, done) {
//  done(null, user);
// });
passport.deserializeUser((id, done) => {
	console.log("DEserialize ... called")
	User.findOne(
		{ _id: id },
		"local.username",
		(err, user) => {
			console.log("======= DESERILAIZE USER CALLED ======")
			console.log(user)
			console.log("--------------")
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)
passport.use(GoogleStratgey)
passport.use(jwtStrategy)

module.exports = passport
