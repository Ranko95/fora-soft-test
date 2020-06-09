const router = require('express').Router();
const mongoose = require('mongoose');
const { Room } = require('../models/Room');

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
    const newRoom = await Room.create({ name, host: userId });
    res.send({ newRoom });
  } catch (error) {
    next(error);
  }
})

module.exports = router;
