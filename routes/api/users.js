const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("../../passport");
// const http = require("http");
// const app = require("../../app");
// const server = http.createServer(app);
const bcrypt = require("bcryptjs");

require("dotenv").config();
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");


const messages = require("../../emailConfirm/messages")
const User = require("../../models/Users");
const templates = require("../../emailConfirm/templatesEmail");
const sendEmail = require("../../emailConfirm/sendEmail")
// router.get("/google", passport.authenticate("google", { scope: ["profile"] }))
// router.get(
// 	"/google/callback",
// 	passport.authenticate("google", {
// 		successRedirect: "/",
// 		failureRedirect: "/login"
// 	})
// )
// router.get("/auth/twitter", passport.authenticate("google",{scope:["profile","email"]}));
// router.get("/auth/twitter/callback", passport.authenticate("google", {
// 		successRedirect: "/rooms",
// 		failureRedirect: "/",
// 		failureFlash: true
// }));
router.post("/register", (req,res)=>{
	
	const { errors, isValid } = validateRegisterInput(req.body);
	if (!isValid) {
    return res.status(400).json(errors);
  	}


				
	User.findOne({ "local.username": req.body.name })
		.then(user=>{
			if (!user) {
				
				
				const newUser = new User({
					"local.password": req.body.password,
			        "local.useremail": req.body.email,
			        username: req.body.name,
			        
				});
				
				newUser
					.save()
					
					
					//.then(user=>sendEmail(user.local.useremail, templates.confirmed(user._id)))
					
					.then(user=>res.json(user))
					//.then(()=>res.json({msg:messages.confirm}))
					.catch(err=>res.json(err));
		        // User.create({ email })
		        //   .then(newUser => sendEmail(newUser.email, templates.confirm(newUser._id)))
		        //   .then(() => res.json({ msg: msgs.confirm }))
		        //   .catch(err => console.log(err))
		      }
		    else if (user && !user.confrim) {
		    	sendEmail(user.local.email, templates.confirm(user._id))
		    	.then(()=>res.json({msg: messages.resend}))
		    }
			else { return res.status(400).json({email: "Email already exists"});}
			// else {
			// 	const newUser = new User({
			// 		"local.password": req.body.password,
			//         "local.useremail": req.body.email,
			//         username: req.body.name
			// 	});
			// 	newUser
			// 		.save()
			// 		.then(user=>res.json(user))
			// 		.catch(err=>res.json(err));
				
			// }
	});
});
// router.post("/register", (req,res)=>{
	
// 	const { errors, isValid } = validateRegisterInput(req.body);
// 	if (!isValid) {
//     return res.status(400).json(errors);
//   	}


				
// 	User.findOne({ "local.username": req.body.name })
// 		.then(user=>{
// 			if (!user) {
				
				
// 				const newUser = new User({
// 					"local.password": req.body.password,
// 			        "local.useremail": req.body.email,
// 			        username: req.body.name,
			        
// 				});
				
// 				newUser
// 					.save()
					
					
// 					.then(user=>sendEmail(user.local.useremail, templates.confirmed(user._id)))
					
// 					.then(()=>console.log("final process"))
// 					.then(()=>res.json({msg:messages.confirm}))
// 					.catch(err=>res.json(err));
// 		        // User.create({ email })
// 		        //   .then(newUser => sendEmail(newUser.email, templates.confirm(newUser._id)))
// 		        //   .then(() => res.json({ msg: msgs.confirm }))
// 		        //   .catch(err => console.log(err))
// 		      }
// 		    else if (user && !user.confrim) {
// 		    	sendEmail(user.local.email, templates.confirm(user._id))
// 		    	.then(()=>res.json({msg: messages.resend}))
// 		    }
// 			else { return res.status(400).json({email: "Email already exists"});}
// 			// else {
// 			// 	const newUser = new User({
// 			// 		"local.password": req.body.password,
// 			//         "local.useremail": req.body.email,
// 			//         username: req.body.name
// 			// 	});
// 			// 	newUser
// 			// 		.save()
// 			// 		.then(user=>res.json(user))
// 			// 		.catch(err=>res.json(err));
				
// 			// }
// 	});
// });
// router.get("/register/confirm/:id", (req,res)=>{
// 	const {id} = req.params;

// 	User.findById(id)
//     .then(user => {

//       // A user with that id does not exist in the DB. Perhaps some tricky 
//       // user tried to go to a different url than the one provided in the 
//       // confirmation email.
//       if (!user) {
//         res.json({ msg: messages.couldNotFind })
//       }
      
//       // The user exists but has not been confirmed. We need to confirm this 
//       // user and let them know their email address has been confirmed.
//       else if (user && !user.confirmed) {
//         User.findByIdAndUpdate(id, { confirm: true })
//           .then(() => res.json({ msg: messages.confirmed }))
//           .catch(err => console.log(err))
//       }

//       // The user has already confirmed this email address.
//       else  {
//         res.json({ msg: msgs.alreadyConfirmed })
//       }

//     })
//     .catch(err => console.log(err))
// })
router.get("/error", (req,res)=>{
	console.log("accept error")
	console.log(req)
	console.log(res)
})
router.post(
	"/login",
	(req, res, next) =>{
		console.log(req.body)
		console.log("================")
		const { errors, isValid } = validateLoginInput(req.body);
	
		if (!isValid) {
	    return res.status(400).json(errors);
	  	}
	  	passport.authenticate("local", function(err, user, info) {
	    if (err) { return next(err); }
	    if (!user) { 
	    	res.status(400).json(info)
	     }
	    // req.logIn(user, function(err) {
	    //   if (err) { return next(err); }
	      	//const user1 = JSON.parse(JSON.stringify(user)) // hack
			const cleanUser = Object.assign({}, user._doc)
			if (cleanUser.local) {
				console.log(`Deleting ${cleanUser.local.password}`)
				delete cleanUser.local.password
			}
			const payload = cleanUser

				jwt.sign(
					payload,
					"secret",
					(err,token)=>{
						res.json({
							success: true,
							token: "Bearer " + token
						});
					});
		 
	    // });
	  	})(req,res,next)

	},
	 // passport.authenticate("local", function(err, user, info) {
  //   if (err) { return next(err); }
  //   if (!user) { 
  //   	res.status(400).json(info)
  //    }
  // 	}),

	// (req, res) => {
		
	// 	console.log("res reach")
	// 	console.log(req.user)
	// 	console.log("req done")
	// 	// if (req.user.confirm) {}
	// 	const user = JSON.parse(JSON.stringify(req.user)) // hack
	// 	const cleanUser = Object.assign({}, user)
	// 	if (cleanUser.local) {
	// 		console.log(`Deleting ${cleanUser.local.password}`)
	// 		delete cleanUser.local.password
	// 	}
	// 	const payload = cleanUser

	// 			jwt.sign(
	// 				payload,
	// 				"secret",
	// 				(err,token)=>{
	// 					res.json({
	// 						success: true,
	// 						token: "Bearer " + token
	// 					});
	// 				});
	// 	//res.json({ user: cleanUser })
	// }
)
  

// router.post("/login", 
	
// 	(req, res) => {
// 	const { errors, isValid } = validateLoginInput(req.body);
	
// 	if (!isValid) {
//     return res.status(400).json(errors);
//   	}

// 	const useremail= req.body.email;
// 	const password = req.body.password;
// 	User.findOne({"local.useremail": useremail}).then(user=>{
// 		if (!user) {
// 			return res.status(400).json({emailnotfound: "Email Not Found."});
// 		}
// 		bcrypt.compare(password, user.local.password).then(isMatch=>{
// 			if (isMatch) {
// 				const payload = {
// 					id: user.id,
// 					name: user.username
// 				};

// 				jwt.sign(
// 					payload,
// 					"secret",
// 					(err,token)=>{
// 						res.json({
// 							success: true,
// 							token: "Bearer " + token
// 						});
// 					});
// 			}
// 			else {
// 				return res
// 					.status(400)
// 					.json({passwordincorrect: "Password Incorrect."});

// 			}
// 		})
		
			 

// 	});
// })
	 


module.exports = router;