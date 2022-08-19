
const mongoose = require("mongoose");

// Schema
const DataSchema = mongoose.Schema(
  {
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    UnitPrice: { type: String },
    Qty: { type: String },
    TotalPrice: { type: String },
    CreateDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

// create model
const ProductsModel = mongoose.model("products", DataSchema);

module.exports = ProductsModel;
