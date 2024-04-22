const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/practicekro")

//schema ==> ye btata h ki db ki sabse choti eneitiy m kya kya property honi chaiye
const userSchema = mongoose.Schema({
  username:String,
  name:String,
  age:Number
});

//Model ye collection ka naam or uska schema leta h or db m bo collection bnata h
module.exports = mongoose.model("user",userSchema);