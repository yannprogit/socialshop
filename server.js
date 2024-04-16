//------------------------ Import ------------------------
const app = require('./app');
const db = require('./models/index.js');

//------------------------ init port ------------------------
const port = 8000;

//------------------------ Connected database ------------------------
db.sequelize.sync({force: false}).then(async () => {
  console.log('Database connected and synchronized');
  
  app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
  });
}).catch((e) => {
  console.error(e);
});