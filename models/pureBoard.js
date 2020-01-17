var mongoose = require('mongoose');

var pureBoardSchema = new mongoose.Schema({
  title: String,
  backgroundImageUrl: String,

  visitedTime: Date,
  isStarred: Boolean,

});

module.exports = mongoose.model('pures', pureBoardSchema);