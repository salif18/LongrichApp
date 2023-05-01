const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();
const Users = require("../models/users");


//REGISTRE USERS SIGNUP
exports.signup = (req, res, next) => {
  const { username, numero, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const users = new Users({
        username: username,
        numero: numero,
        password: hash,
      });
      users
        .save()
        .then(() => res.status(200).json({ message: "new user" }))
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

//LOGIN USERS
exports.login = (req, res, next) => {
  const { numero, password } = req.body;
  Users.findOne({ numero: numero })
    .then((user) => {
      if (!user) {
        res.status(404).json({ message: "numero incorrect" });
      }
      bcrypt
        .compare(password, user.password)
        .then((valid) => {
          if (!valid) {
            res.status(404).json({ message: "password incorrect" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id },process.env.KEY_TOKEN, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

//READ USERS
exports.readUsers = async (req, res) => {
  try {
    const users = await Users.aggregate([
      // {
      //   $lookup: {
      //     from: "profile",
      //     localField: "userId",
      //     foreignField: "userId",
      //   },
      // },
      {
        $project: {
          userId: 1,
          name: 1,
          username: 1,
          numero: 1,
          email: 1,
          address: 1,
          photo: 1,
        },
      },
    ]);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err });
  }
};

//READ ONE USER
exports.readOneUser = (req, res, next) => {
  const { id } = req.params;
  Users.findById({ _id: id })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json({ err }));
};

//UPDATE USER
exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  Users.findByIdAndUpdate(
    { _id: id },
    { $set:req.body},
    { new: true }
  )
    .then(() => res.status(201).json({ message: "user update" }))
    .catch((err) => res.status(400).json({ err }));
};

//DELETE USER
exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  Users.findByIdAndDelete({ _id: id })
    .then(() => res.status(200).json({ message: "user delete" }))
    .catch((err) => res.status(400).json({ err }));
};

//STATYSTICS USERS TO LOG
exports.statsUsers = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const stats = await Users.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: { $sum: 1 } } },
    ]);
    res.status(200).send(stats);
  } catch (err) {
    res.status(500).json({ err });
  }
};
