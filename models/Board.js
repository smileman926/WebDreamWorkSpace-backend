var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
  title: String,
  backgroundImageUrl: String,
  isTemplate: Boolean,
  templateType: String,
  visitedTime: Date,
  isStarred: Boolean,
  author: String,
  symbolIconUrl: String,
  brief: String,
  linkUrl: String,
});

module.exports = mongoose.model('boards', BoardSchema);