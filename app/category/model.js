const mongoose = require("mongoose");

let categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama kategori harus diisi"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
