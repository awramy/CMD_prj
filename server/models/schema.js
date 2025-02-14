import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name:  {type: String,required: true,},
  price: {type: Number,required: true,},
  image: {type: String,required: true,},
  description: { type: String, required: true,},
  pattern: {type: String, required: true},
});

const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true, default: "User" },
  balance: { type: Number, required: true, default: 3000 },
});

const basketSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  product_id: { type: String, required: true },
  print_image: { type: String, required: false },
});

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const Basket = mongoose.model("Basket", basketSchema);

export { Product, User, Basket };