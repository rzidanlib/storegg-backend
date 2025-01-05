const mongoose = require("mongoose");
const { urlDb } = require("../config");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // DeprecationWarning: MongoDB driver >= 6.0
    useFindAndModify: false, // Tidak diperlukan di versi terbaru mongoose
    connectTimeoutMS: 30000, // 30 detik
  });
  console.log("Database connected");
}

const db = mongoose.connection;

db.on("error", (err) => console.error("MongoDB connection error:", err));
db.once("open", () => console.log("MongoDB connection successful"));

module.exports = db;
