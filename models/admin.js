const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarURL: String,
  googleId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Admin', adminSchema);