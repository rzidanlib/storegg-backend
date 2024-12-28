const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  serviceName: process.env.SERVICE_NAME,
  urlDb: process.env.MONGO_URL,
  port: process.env.PORT,
  secret: process.env.SECRET,
};
