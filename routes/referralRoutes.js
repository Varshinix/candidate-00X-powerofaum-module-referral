const express = require('express');
const router = express.Router();
const Referral = require('../models/referral');

const generateCode = () => {
  const part = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `REF-${part}`;
};

// Create 
router.post('/create-referral', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const existing = await Referral.findOne({ email });
    if (existing) {
      return res.status(200).json({ code: existing.code }); 
    }
    const code = generateCode(); 
    await Referral.create({ email, code });
    res.status(201).json({ code });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create referral code' });
  }
});

// Apply
router.post('/apply-referral', async (req, res) => {
  const { code, email } = req.body;
  if (!code || !email) return res.status(400).json({ error: 'Code and email are required' });

  try {
    const referral = await Referral.findOne({ code });
    if (!referral) return res.status(404).json({ error: 'Referral code not found' });
    if (referral.referredUsers.includes(email)) {
      return res.status(400).json({ error: 'User already referred with this code' });
    }
    referral.referredUsers.push(email);
    await referral.save();
    res.json({ applied: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not apply referral code' });
  }
});

// Get 
router.get('/referral-stats', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Code is required' });

  try {
    const referral = await Referral.findOne({ code });
    if (!referral) return res.status(404).json({ error: 'Referral code not found' });
    const signups = referral.referredUsers.length;
    const credits = signups * 150; 
    res.json({ signups, credits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not retrieve stats' });
  }
});

module.exports = router;
