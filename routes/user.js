const express = require("express");
const { verifyToken, verifyTokenAndAuthorizatiion, verifyTokenAndAdmin } = require("./verifyToken");
const { UpdateUserbyId ,DeleteUserbyId,getUserById,getUserStats, getAllUserById } = require("../controllers/user.controller");

const Router = express.Router();



//  http://localhost:9000/users/:userid
 //Update
Router.put("/:userid",verifyTokenAndAuthorizatiion,UpdateUserbyId);

// // Delete
//  http://localhost:9000/users/deleteUser/:userid

Router.delete("/deleteuser/:userid",verifyTokenAndAuthorizatiion,DeleteUserbyId)

// // Get
//  http://localhost:9000/users/GetUser/:userid

Router.get("/GetUser/:userid",verifyTokenAndAuthorizatiion ,getUserById)


// // Get All Users
//  http://localhost:9000/users/GetAllUser

Router.get("/GetAllUser",verifyTokenAndAdmin , getAllUserById)

// // // Get User Stats
// //  http://localhost:9000/users/stats

// Router.get("/stats",verifyTokenAndAdmin ,getUserStats)





module.exports = Router;