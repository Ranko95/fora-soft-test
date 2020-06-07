const mongoose = require('mongoose');
const { messageSchema } = require('./Message');

const roomSchema = new mongoose.Schema({
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  messages: [messageSchema],
});

const Room = mongoose.model('Room', roomSchema);

module.exports = {
  Room,
  roomSchema
};
