const dotEnv = require("dotenv");

dotEnv.config({ path: __dirname + '/../.env' });

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
