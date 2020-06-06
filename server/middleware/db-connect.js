const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test=fora-soft', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to the Database'))
.catch((err) => console.error(`Error occured ${err}`));

module.exports = mongoose.connection;
