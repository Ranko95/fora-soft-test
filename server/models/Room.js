const mongoose = require('mongoose');
const { messageSchema } = require('./Message');
const { userSchema } = require('./User');

const roomSchema = new mongoose.Schema({
  name: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  users: [userSchema],
  messages: [messageSchema],
});

const Room = mongoose.model('Room', roomSchema);

module.exports = {
  Room,
  roomSchema
};
