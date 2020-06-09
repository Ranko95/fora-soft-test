const mongoose = require('mongoose');
const { roomSchema } = require('./Room');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rooms: [roomSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  userSchema,
}
