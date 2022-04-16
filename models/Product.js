const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    typeOfTransaction:String,
    description:String,
    price:Number,
    area:Number,
    adresseProduct:String,
    dateOfCreactionProduct: {
        type: Date,
        default: Date.now(),
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);