import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  img: { type: String, required: false },
  info: { type: Array, required: false },
});
let Product = mongoose.model("product", productSchema);

let userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  basket: { type: Array, required: false },
});
let User = mongoose.model("user", userSchema);

let basketSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userID: { type: String, required: true },
  productID: { type: String, required: true },
  imageID: { type: String, required: false },
});
let Basket = mongoose.model("basket", basketSchema);

export default { Product, User, Basket };
