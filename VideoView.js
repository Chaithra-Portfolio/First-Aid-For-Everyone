const mongoose = require('mongoose');

const videoViewSchema = new mongoose.Schema({
  email: { type: String, required: true },
  videoTitle: { type: String, required: true },
  viewedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('VideoView', videoViewSchema);
