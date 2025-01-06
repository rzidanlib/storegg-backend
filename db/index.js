const mongoose = require("mongoose");
const { urlDb } = require("../config");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(urlDb, {
    autoIndex: true,
    serverSelectionTimeoutMS: 50000,
  });
  console.log("Database connected");
}

const db = mongoose.connection;
module.exports = db;
