const mongoose = require("mongoose");

let bankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama pemilik akun bank harus diisi"],
    },
    bankName: {
      type: String,
      required: [true, "Nama bank harus diisi"],
    },
    noRekening: {
      type: String,
      required: [true, "Nomor rekening harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", bankSchema);
