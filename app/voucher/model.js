const mongoose = require("mongoose");

let voucherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nama game harus diisi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    thumbnail: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    nominals: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Nominal",
        },
      ],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Voucher", voucherSchema);
