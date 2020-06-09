const mongoose = require('mongoose');
const { userSchema } = require('./User');

const messageSchema = new mongoose.Schema({
  text: String,
  user: Object,
  date: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = {
  Message,
  messageSchema
}
