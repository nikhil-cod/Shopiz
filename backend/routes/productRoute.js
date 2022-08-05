const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser ,authorizeRoles} = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"), getAllProducts); //isAuthenticated means user is logged in or not 

router.route("/product/new").post(isAuthenticatedUser, createProduct);

router.route("/product/:id").put(isAuthenticatedUser, updateProduct);

router.route("/product/:id").delete(isAuthenticatedUser, deleteProduct);

router.route("/product/:id").get(isAuthenticatedUser, getProductDetails);



module.exports = router;