const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");



const User = require('../../models/Users');

router.post('/register', (req,res)=>{

	const { errors, isValid } = validateRegisterInput(req.body);
	if (!isValid) {
    return res.status(400).json(errors);
  	}
	
	User.findOne({ email: req.body.email })
		.then(user=>{
			if (user) { return res.json({email: "Email already exists"});}
			else {
				const newUser = new User({
					name: req.body.name,
			        email: req.body.email,
			        password: req.body.password
				});
				newUser
					.save()
					.then(user=>res.json(user))
					.catch(err=>console.log(err));
				
			}
		});
});
router.post('/login', (req, res) => {
	console.log(req.body);
	const email= req.body.email;
	const password = req.body.password;
	User.findOne({email}).then(user=>{
		if (!user) {
			console.log('not email found');
		}
		if (password===user.password) {
			const payload = {
					id: user.id,
					name: user.name
				};

				jwt.sign(
					payload,
					'secret',
					(err,token)=>{
						res.json({
							success: true,
							token: "Bearer " + token
						});
					});
					} 
			 else {
				return res
					.status(400)
					.json('password incorrect');

			}
		});
	})


module.exports = router;