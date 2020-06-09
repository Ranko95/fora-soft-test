const router = require('express').Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');

const saltRounds = 10;

router.post('/signup', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.send({ error: 'Email already in use' });
    } else {
      const newUser = await User.create({
        name, email,
        password: await bcrypt.hash(password, saltRounds)
      });
      res.send({ newUser });
    }
  } catch (error) {
    next(error)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.send({ user });
      } else {
        res.send({ error: 'Wrong email or password' });
      }
    } else {
      res.send({ error: 'Wrong email or password' });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
