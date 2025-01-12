const mongoose = require("mongoose");

let nominalSchema = new mongoose.Schema(
  {
    coinQuantity: {
      type: Number,
      default: 0,
    },
    coinName: {
      type: String,
      required: [true, "Nama koin harus diisi"],
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Nominal", nominalSchema);
