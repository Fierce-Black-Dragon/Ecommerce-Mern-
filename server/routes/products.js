import {
  getAllproducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
  reviewProductById,
} from "../controllers/productController.js";
import express from "express";
import { addToCart, removeitem } from "../controllers/cartController.js";
import { checkAuth, isSellerOrAdmin } from "../middleWare/roleAuth.js";

const router = express.Router();

//all products
router.get("/", getAllproducts);
//adding products
router.post("/", checkAuth, isSellerOrAdmin, createProduct);
//specific  product by ID
router.get("/:id", getProductById);

// //specific product update by id
router.patch("/:id", checkAuth, isSellerOrAdmin, updateProductById);
// //specific course delete
router.delete("/:id", checkAuth, isSellerOrAdmin, deleteProductById);

router.get("/:id/addCart", checkAuth, addToCart);

router.get("/:id/removeCart", checkAuth, removeitem);
router.post("/:id/reviews", checkAuth, reviewProductById);
export default router;
