const express = require('express');
const sequelize = require('./config/database');
require('./models/user');
require('./models/perguntas');
require('./models/respostas')

const routes = require('./routes/indexRoutes');

const app = express();
app.use(express.json());
app.use('/api', routes);
app.use(express.json());
app.use(routes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando: http://localhost:3000');
  });
});
