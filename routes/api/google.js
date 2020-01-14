const express = require("express");
const router = express.Router();
const passport = require("../../passport");

router.get("/auth/google", passport.authenticate("google",{scope:["profile"]}));
router.get("/auth/twitter/callback", passport.authenticate("google"),(req,res)=>{
	console.log("received callback");
	console.log(req);
	
});
// , (req,res)=>{
// 	console.log("sdf")
// 	res.redirect("http://localhost:3000/dashboard");
// });

module.exports = router;