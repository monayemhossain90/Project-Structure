const express = require("express");
const ProductController = require("../controllers/ProductsController");
const router =express.Router();

// API 

router.post("/insertProduct",ProductController.insertProduct);
router.get("/readProduct",ProductController.readProduct)
router.post("/updateProduct/:id",ProductController.updateProduct)
router.post("/deletProduct",ProductController.deleteProduct)


module.exports = router;