const mongoose = require("mongoose");

let paymentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "Tipe pembayaran harus diisi"],
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    banks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
