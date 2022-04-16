const express = require("express");
const { userRegister, userLogin } = require("../controllers/auth.controller");


const Router = express.Router();

// POST register user
// POST  "http://localhost:9000/auth/register"
// @desc  : user register

Router.post("http://localhost:7500/auth/register", userRegister)

// POST login user
// POST  "http://localhost:9000/auth/login"
// @desc  : user login

Router.post("/login",userLogin);



module.exports = Router;