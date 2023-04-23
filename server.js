const app = require('./config/express')();
const port = app.get('port');
const sequelize = require('./config/sequelize');

// sync squelize with database
(async () => {
  try {
    await sequelize.sync({ force: false, alter: true});
    console.log('database has been synconized successfully.');
  }catch (error) {
    console.error('Unable to syncronize the database:', error)
  }
})();

// RODANDO NOSSA APLICAÇÃO
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});


