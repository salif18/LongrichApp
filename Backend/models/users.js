const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const collection = new mongoose.Schema({
  username: { type: String, required: true },
  numero: { type: Number, required: true,unique:true },
  password: { type: String, required: true },
},{timestamps:true});

collection.plugin(uniqueValidator);
module.exports = mongoose.model("Users", collection);
