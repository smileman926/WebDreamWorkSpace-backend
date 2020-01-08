const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
	name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// UserSchema.plugin(passportLocalMongoose);
module.exports = User = mongoose.model("users", UserSchema);