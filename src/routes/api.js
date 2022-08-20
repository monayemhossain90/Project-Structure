const express = require("express");
const ProductController = require("../controllers/ProductsController");
const router =express.Router();

// API 

router.post("/insertProduct",ProductController.insertProduct);
router.post("/readProduct",ProductController.readProduct)
router.post("/updateProduct/:id",ProductController.updateProduct)
router.post("/deleteProduct/:id",ProductController.deleteProduct)


module.exports = router;