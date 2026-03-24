const mongoose = require('mongoose');
const bcrypt   = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  age:      { type: Number },
  gender:   { type: String, enum: ['Male', 'Female', 'Other'] },
  height:   { type: Number },   // cm
  weight:   { type: Number },   // kg initial

  // ── Google Fit OAuth tokens ───────────────────────
  googleFitConnected:  { type: Boolean, default: false },
  googleAccessToken:   { type: String,  default: null },
  googleRefreshToken:  { type: String,  default: null },
  googleTokenExpiry:   { type: Date,    default: null },
  googleEmail:         { type: String,  default: null },   // Google account email

  createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare plain password to hashed
UserSchema.methods.matchPassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

// Create model with fallback to memory store
let UserModel;
try {
  UserModel = mongoose.model('User', UserSchema);
} catch (err) {
  console.log('Using memory store for User model');
  const memoryStore = require('../config/memoryStore');
  UserModel = memoryStore;
}

module.exports = UserModel;
