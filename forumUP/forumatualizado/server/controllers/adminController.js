const User = require('../models/user');

exports.dashboard = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};