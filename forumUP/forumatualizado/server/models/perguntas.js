const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Pergunta = sequelize.define('Pergunta', {
  titulo: DataTypes.STRING,
  conteudo: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  usuarioId: DataTypes.INTEGER,
  allowNull: false
});

//Alterar quando o banco tiver funfando 100%
//User.hasMany(Pergunta, { foreignKey: 'usuarioId' });
//Pergunta.belongsTo(User, { foreignKey: 'usuarioId' });

module.exports = Pergunta;