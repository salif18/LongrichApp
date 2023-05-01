const fs = require("fs");
const Products = require("../models/products");

//CREAT PRODUCTS
exports.createProducts = (req, res, next) => {
  const { name, image, category, price, likes, dislikes, comments, details, stock } = req.body;
  const products = new Products({
    name: name,
    image: image,
    category: category,
    price: price,
    stock:stock,
    likes:likes,
    dislikes:dislikes,
    comments:comments,
    details:details
  });
  products
    .save()
    .then(() => res.status(201).json({ message: "Products publish" }))
    .catch((err) => res.status(400).json({ err }));
};

//READ PRODUCTS
exports.readProducts = (req, res, next) => {
  Products.find()
    .then((products) => res.status(200).json(products))
    .catch((err) => res.status(400).josn({ err }));
};

// READ CATEGORY
exports.categoryProduct =(req, res, next) =>{
  const {category} =req.params
  console.log(category)
  Products.find({category:category})
  .then(product => res.status(200).json(product))
  .catch(err => res.status(400).json({err}))
}
//READ ONE PRODUCT
exports.readOneProduct = (req, res, next) => {
  const { id } = req.params;
  Products.findOne({ _id: id })
    .then((product) => res.status(200).json(product))
    .catch((err) => res.status(400).json({ err }));
};

//UPDATE PRODUCT
exports.updateProduct = (req, res, next) => {
  const { id } = req.params;
  Products.updateOne({ _id: id }, { ...req.body }, { new: true })
    .then(() => res.status(201).json({ message: "Product update" }))
    .catch((err) => res.status(400).json({ err }));
};

//DELETE PRODUCT
exports.deleteProduct = (req, res, next) => {
  const { id } = req.params;
  Products.deleteOne({ _id: id })
    .then(() => res.status(200).json({ message: "delete product" }))
    .catch((err) => res.status(400).json({ err }));
};

//NEW ARRIVAL
exports.newArrival = async (req, res, next) => {
  try {
    const newArrival = await Products.aggregate([
      {
        $sort: createdAt - 1,
      },
      { $limit: 5 },
    ]);
    res.status(200).json(newArrival);
  } catch (err) {
    res.status(500).json({ err });
  }
};
