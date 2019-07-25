const mongoose = require("mongoose");
const logger = require("../config/winston");
require("dotenv").config();

exports.connect = async () => {
  mongoose.connect(process.env.MONGO_DB_TEST, { useNewUrlParser: true }, () => {
    logger.info(`Connected to test database ${process.env.MONGO_DB_TEST}!`);
  });
};
