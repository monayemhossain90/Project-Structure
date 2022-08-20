const ProductsModel = require("../models/ProductsModel");

// CRUD Operation

// C = Create
exports.insertProduct = (req, res) => {
  let reqBody = req.body;
  ProductsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(401).json({ status: "failed", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// R = Read

exports.readProduct = (req, res) => {
  let Query = {};
  let Projection = {};

  ProductsModel.find(Query, Projection, (err, data) => {
    if (err) {
      res.status(400).json({ status: "Failed", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

//  U = Update

exports.updateProduct = (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  let reqBody = req.body;

  ProductsModel.updateOne(query, reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "failed", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};

exports.deleteProduct = (req, res) => {
  let id = req.params.id;
  let query = { _id: id };
  ProductsModel.remove(query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "failed", data: err });
    } else {
      res.status(200).json({ status: "Success", data: data });
    }
  });
};
