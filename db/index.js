const mongoose = require("mongoose");
const { urlDb } = require("../config");

const db = async () => {
  try {
    await mongoose.connect(urlDb);
    return Promise.resolve("DATABASE CONNECTED");
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = db;
