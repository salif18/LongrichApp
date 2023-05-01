const Orders = require("../models/orders");

//CREAT PRODUCTS
exports.createOrders = (req, res, next) => {
  const { userId, cart, amount, status, address } = req.body;
  const orders = new Orders({
    userId: userId,
    cart: cart,
    amount: amount,
    status: status,
    address: address,
  });
  orders
    .save()
    .then(() => res.status(201).json({ message: "new Orders" }))
    .catch((err) => res.status(400).json({ err }));
};

//READ ORDERS
exports.readOrders = async(req, res, next) => {
  Orders.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(400).josn({ err }));
};

//READ ONE ORDERS TO ADMIN
exports.readOneOrders = (req, res, next) => {
  const { id } = req.params;

  Orders.findOne({ _id: id })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ err }));
};

//READ ORDERS TO USER
exports.readUserOrders = (req, res, next) => {
  const { userId } = req.params;
  console.log(userId)
  Orders.findOne({ userId:userId })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(400).json({ err }));
};

//UPDATE ORDERS STATUS DELIVRAITION
exports.updateStatusOrders = async (req, res, next) => {
  const { id } = req.params;
  const { newStatus } = req.body;
  try {
    const orders = await Orders.findOneAndUpdate(
      { _id: id },
      { $set: { status: newStatus } },
      { new: true }
    );
    res.status(201).json({ status: orders.status });
  } catch (err) {
    res.status(400).json({ err });
  }
};

//DELETE ORDERS
exports.deleteOrders = (req, res, next) => {
  const { id } = req.params;
  Products.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: "delete product" }))
    .catch((err) => res.status(400).json({ err }));
};

//STATYSTICS TO SALES REVENUES
exports.statysticSales = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const stats = await Orders.aggregate([
      {
        $match: { createdAt: { $gte: previousMonth } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: { $total },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(stats);
  } catch (err) {
    res.status(500).json({ err });
  }
};
