var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res) {
  // req.session.ban=true;
  res.cookie("age",32); 
  res.render("index");
});

//read krne k liye
router.get("/read", function(req,res){
 console.log(req.cookies);
 res.send("check")
})

//delete cookie
router.get("/delete" ,(req,res)=>{
  res.clearCookie("age")
  res.send("clear hogyi h cookie")
})



// //insert in db using ceate function
// router.get('/create', async function(req, res) {
// const createuser =  await userModel.create({
//   username:"shubhg77",
//   name:"shubh",
//   age:21
// })
// res.send(createuser)
// });

// //find all user
// router.get("/allusers", async(req,res)=>{
//   let alluser = await userModel.find();
//   res.send(alluser); 
// })

// router.get("/delete" , async(req,res)=>{
//   let deleteduser = await userModel.findOneAndDelete({
//     name:"shubh"
//   })
//   res.send(deleteduser);
// })

// router.get("/checks", function(req,res){
//   if(req.session.ban === true){
//   // console.log(req.session);
//   res.send("you are banned ")
//   }
//   else{
//     res.send("not banned")
//   }
// })

// router.get("/removeban",(req,res)=>{
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("ban removed");
//   })
// })
module.exports = router;
