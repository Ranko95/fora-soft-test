const mongoose = require('mongoose');
const { userSchema } = require('./User');

const messageSchema = new mongoose.Schema({
  text: String,
  user: userSchema,
  date: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = {
  Message,
  messageSchema
}
