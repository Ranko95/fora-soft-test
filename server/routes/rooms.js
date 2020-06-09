const router = require('express').Router();
const mongoose = require('mongoose');
const { Room } = require('../models/Room');
const { User } = require('../models/User');

router.get('/', async (req, res, next) => {
  try {
    const rooms = await Room.find({});
    res.send({ rooms });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, userId } = req.body;
    const user = await User.findOne({ _id: userId });
    console.log(user);
    const newRoom = await Room.create({ name, host: userId, users: [user] });
    res.send({ newRoom });
  } catch (error) {
    next(error);
  }
});

router.put('/room', async (req, res, next) => {
  try {
    const { userId, roomId } = req.body;
    const user = await User.findOne({ _id: userId });
    const updated = await Room.updateOne({ _id: roomId }, { $push: { users: user } });
    if (updated.nModified > 0) {
      res.sendStatus(200);
    } else {
      res.send({ error: 'Something went wrong... Try again' });
    }
  } catch (error) {
    next(error);
  }
})

module.exports = router;
