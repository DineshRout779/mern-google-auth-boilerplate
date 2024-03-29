const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  googleId: { type: String, unique: true },
  profilePicture: { type: String },
});

module.exports = mongoose.model('User', userSchema);
