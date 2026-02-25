const User = require('../models/user');

exports.listAdvogados = async (req, res) => {
  const advogados = await User.findAll({ where: { role: 'advogado' } });
  res.json(advogados);
};