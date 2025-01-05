const mongoose = require("mongoose");
const { urlDb } = require("../config");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(urlDb);
  console.log("Database connected");
}

const db = mongoose.connection;
module.exports = db;
