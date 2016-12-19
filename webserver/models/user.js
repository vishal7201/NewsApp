var mongoose =require('mongoose');

var userSchema =mongoose.Schema({
  email:String,
  name:String,
  password:String
});

var User= mongoose.model('User',userSchema);

module.exports=User;
