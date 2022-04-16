const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    lastname: { type: String },
    firstname: { type: String },
    phonenumber: String,
    photo: { type: String },
    adress: { type: String },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);