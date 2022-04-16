const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");


 // /***************************** UpdateUserbyId route callback function ************/

exports.UpdateUserbyId = async (req, res) => {
    if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_KEY
          ).toString();
    }

    try {
       await User.findByIdAndUpdate(req.params.userid, {
            $set:{...req.body},
        }, {new:true});

res.status(200).json({ msg: "User updeted with success" });

    } catch (error) {res.status(400).json({ errors: [{ msg: "Update user failed" }] })
        
    }};

 // /***************************** DeleteUserbyId route callback function ************/

    exports.DeleteUserbyId = async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.userid )
    
    res.status(200).json( { msg: "User deleted with success" });
    
        } catch (error) {res.status(400).json({ errors: [{ msg: "Delete user failed" }] })
            
        }};
    
    // /***************************** getUserById route callback function ************/

        exports.getUserById = async (req, res) => {
           
            try {
              const user = await User.findById(req.params.userid)
                    
          

              res.status(200).json({msg: "Fetch User with success",user}); 
            } catch (error) {
              console.log(error);
              res.status(400).json({ errors: [{ msg: "Get user failed" }] });
            }
          };

          
// /***************************** getAllUserById route callback function ************/****** ok */

          exports.getAllUserById = async (req, res) => {
               const query = req.query.new ;
            try {
              const users = query ?  await User.find().limit(5).sort({_id:-1}) : await User.find()       
              res.status(200).json({users}); 
            } catch (error) {
              console.log(error);
              res.status(400).json({ errors: [{ msg: "Get ALL user failed" }] });
            }
          };
          
//   // /***************************** getUserStats route callback function ************/

//           exports.getUserStats = async (req, res) => {
            
//             const date= new Date();
//             const lastYear = new Date(date.setFullYear(date.getFullYear() -1));
//         try{ 
//             const data = await User.aggregate([
//                {$match :  {createdAt : { $gte : lastYear} }},

//                { $project :{ month: {$month : "$createdAt" },}, },
//                { 
//                    $group:{
//                     _id:"$month",
//                     total:{$sum:1},
//                 }}

//             ]);
//            res.status(200).json(data); 
//          } catch (error) {
//            res.status(400).json(err);
//          }
//        };