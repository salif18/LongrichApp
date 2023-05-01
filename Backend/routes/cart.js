const express = require("express");
const router = express.Router();
const cartControllers = require("../controllers/cart");

router.post("/", cartControllers.createCart);
router.get("/:userId", cartControllers.readCart);
router.delete("/:id", cartControllers.deleteCart);

module.exports = router;
