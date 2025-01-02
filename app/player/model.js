const mongoose = require("mongoose");

let playerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email harus diisi"],
    },
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
      maxLength: [225, "Panjang nama harus 3 - 225 karakter"],
      minLength: [3, "Panjang nama harus 3 - 225 karakter"],
    },
    username: {
      type: String,
      required: [true, "Username harus diisi"],
      maxLength: [225, "Panjang username harus 3 - 225 karakter"],
      minLength: [3, "Panjang username harus 3 - 225 karakter"],
    },
    password: {
      type: String,
      required: [true, "Password harus diisi"],
      maxLength: [225, "Panjang password maks 225 karakter"],
      minLength: [8, "Panjang password min 8 karakter"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["Y", "N"],
      default: "Y",
    },
    avatar: {
      type: String,
    },
    fileName: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required: [true, "No Handphone harus diisi"],
      maxLength: [13, "Panjang nomor handphone harus 9 - 13 karakter"],
      minLength: [9, "Panjang nomor handphone harus 9 -13 karakter"],
    },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Player", playerSchema);
