const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  email: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  referredUsers: { type: [String], default: [] } 
});

module.exports = mongoose.model('Referral', referralSchema);
