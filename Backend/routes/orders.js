const express = require("express");
const router = express.Router();
const ordersControllers = require("../controllers/orders");

router.post("/", ordersControllers.createOrders);
router.get("/", ordersControllers.readOrders);
router.get("/statystic", ordersControllers.statysticSales);
router.get("/:id", ordersControllers.readOneOrders);
router.get("/:userId", ordersControllers.readUserOrders);
router.put("/status/:id", ordersControllers.updateStatusOrders);
router.delete("/:id", ordersControllers.deleteOrders);

module.exports = router;
