const express = require("express");
const router = express.Router();
const productsControllers = require("../controllers/products");

router.post("/", productsControllers.createProducts);
router.get("/", productsControllers.readProducts);
router.get('/:category',productsControllers.categoryProduct)
router.get("/arrival", productsControllers.newArrival);
router.get("/:id", productsControllers.readOneProduct);
router.put("/:id", productsControllers.updateProduct);
router.delete("/:id", productsControllers.deleteProduct);

module.exports = router;
