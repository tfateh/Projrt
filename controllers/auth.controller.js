const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

/***************************** User register  ********************** */

exports.userRegister = async (req, res) => {
  const newUser = await new User({ ...req.body });
  const email = newUser.email;

  try {
    const user = await User.findOne({ email });
    if (user) return res.status(402).json({ msg: "User already exist" });

    const payload = {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phoneNumber: newUser.phoneNumber,
      email: newUser.email,
      adress: newUser.adress,
      username: newUser.username,
      password: newUser.password,
      photo: newUser.photo,
    };


    newUser.password = CryptoJS.AES.encrypt(
      newUser.password,
      process.env.PASS_KEY
    ).toString();

    const accessToken = await jwt.sign({id:newUser._id, isAdmin:newUser.isAdmin} , 
      process.env.JWT_KEY,
      {expiresIn:"3d"});

   const savedUser= await newUser.save();
    res.status(202).json({ msg: "Register success", savedUser , accessToken  : `Bearer ${accessToken}` });
 
  } catch (error) {
    console.log(error);
    res.status(402).json({ msg: "User register failed", errors: error });
  }
};

// /******************* User login ***************** */
exports.userLogin = async (req, res) => {
  try {
    let { email, username } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(403).json({ msg: "Bad credentiels email" });

    

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_KEY
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (Originalpassword !== req.body.password)
      return res.status(402).json({ msg: "Bad credentiels password" });

    const { password, ...others } = user._doc;

    const accessToken = await jwt.sign({id:user._id, isAdmin:user.isAdmin} , 
      process.env.JWT_KEY,
      {expiresIn:"3d"});

    res
      .status(203)
      .json({ msg: "login success", ...others, accessToken  : `Bearer ${accessToken}`});
      
  } catch (error) {
    console.log(error);
    res.status(403).json({ errors: error });
  }
};