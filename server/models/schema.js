import mongoose from "mongoose";

const productInfoSchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ['Материал', 'Плотность ткани', 'Сезон', 'Пол', 'Объем', 'Вес'],
    required: true },
  description: { type: String,required: true },
  image: {
    type: String,
    enum: ['cloth.png', 'density.png', 'season.png', 'gender.png', 'volume.png', 'weight.png'],
  }
})

const productSchema = new mongoose.Schema({
  name:  {type: String,required: true,},
  price: {type: Number,required: true,},
  image: {type: String,required: true,},
  description: { type: String, required: true,},
  pattern: {type: Object, required: true},
  info: [productInfoSchema]
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

const userSelectPhotoSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  image: { type: String, required: false },
});

const designSchema = new mongoose.Schema({
  image : {type: String}
})

const Product = mongoose.model("Product", productSchema);
const User = mongoose.model("User", userSchema);
const Basket = mongoose.model("Basket", basketSchema);
const SelectPhoto = mongoose.model("SelectPhoto", userSelectPhotoSchema);
const Design = mongoose.model("Design", designSchema)

export { Product, User, Basket, SelectPhoto, Design };