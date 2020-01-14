const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 //const passportLocalMongoose = require("passport-local-mongoose");
const bcrypt = require("bcryptjs")
 mongoose.promise = Promise

const UserSchema = new Schema({
  google: {
    googleId: { type: String, required: false }
  },
  local: {
    password: { type: String, unique: false, required: false },
    useremail: { type: String, unique: true, required: true}
  },
  confirm: {type: Boolean, default: false},

  //email: { type:String, unique: false}
  username: {type:String, unique:false}     
});
UserSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}
UserSchema.pre("save", function(next) {
  if (!this.local.password) {
    console.log("=======NO PASSWORD PROVIDED=======")
    next()
  } else {
    this.local.password = this.hashPassword(this.local.password)
    next()
  }
  // this.password = this.hashPassword(this.password)
  // next()
})
 //UserSchema.plugin(passportLocalMongoose);
module.exports = User = mongoose.model("users", UserSchema);