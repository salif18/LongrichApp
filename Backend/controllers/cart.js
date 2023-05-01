const Carts = require("../models/cart");

//CREAT PRODUCTS
exports.createCart = (req, res, next) => {
  const { name, image, category, price ,quantity} = req.body;
  const carts = new Carts({
    name: name,
    image: image,
    category: category,
    price: price,
    quantity:quantity
  });
  carts
    .save()
    .then(() => res.status(201).json({ message: "Products add to cart" }))
    .catch((err) => res.status(400).json({ err }));
};

//READ PRODUCTS
exports.readCart = (req, res, next) => {
  const {userId} = req.params
  Carts.findOne({userId:userId})
    .then((cart) => res.status(200).json(cart))
    .catch((err) => res.status(400).josn({ err }));
};

//DELETE PRODUCT
exports.deleteCart = (req, res, next) => {
  const { id } = req.params;
  Carts.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: "delete product" }))
    .catch((err) => res.status(400).json({ err }));
};
