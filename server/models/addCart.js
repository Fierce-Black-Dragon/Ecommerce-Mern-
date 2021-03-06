import mongoose from "mongoose";
var addcartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
  grandtotalPrice: { type: Number, default: 0 },
  cartItems: [
    {
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      name: { type: String, required: true },
      seller: {
        type: mongoose.Schema.Types.ObjectID,
        ref: "User",
        required: true,
      },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      qty: { type: Number, default: 1, required: true },

      totalprice: { type: Number, default: 0, required: true },
    },
  ],
  ShipingPrice: { type: Number, default: 0, required: true },
  grandtotalPrice: { type: Number, default: 0, required: true },
});
const cart = mongoose.model("AddCart", addcartSchema);
export default cart;
