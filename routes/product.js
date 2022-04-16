const express = require("express");
const { verifyToken, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("./verifyToken");
const {
  addProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  updateProduct,
} = require("../controllers/product.controller");


const Router = express.Router();

//  http://localhost:9000/product/addProduct/:userid
// Creat product

Router.post("/addProduct/:userid",verifyTokenAndAuthorizatiion,verifyTokenAndAdmin, addProduct);


// //  http://localhost:9000/product/updateProduct/:idProduct/:userid
// // update Product
Router.put("/updateProduct/:idProduct/:userid",verifyTokenAndAuthorizatiion,verifyTokenAndAdmin, updateProduct);

// //  http://localhost:9000/product/deleteProduct/:idProduct/:userid
// // delete Product

Router.delete("/deleteProduct/:idProduct/:userid", verifyTokenAndAuthorizatiion ,verifyTokenAndAdmin, deleteProduct);

// //  http://localhost:9000/product/products
// //getAllProducts
Router.get("/products", verifyToken,getAllProducts);

// //  http://localhost:9000/product/:id
// // get Product by id

Router.get("/:id", getProductById);

module.exports = Router;