const db = require('./src/db/models');

const dbCheck = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection with DB has been successful.');

  } catch (error) {
    console.error('Database operation failed:', error.message);
  }
};

dbCheck();
