var express=require('express');
var mongoose =require('mongoose');
var User=require('../models/user');

var router=express.Router();

var emailExists=false;

router.post('/email',function(req,res){
  User.find({email:req.body.email},function(err,data){
    if(err){
      console.log(err);
      res.json({exists:err})
    }
    else {
      if(data.length!=0){
        res.json({exists:false});
      }
      else{
        res.json({exists:true});
      }
    }
  })
});

router.post('/',function(req,res){
  var email=req.body.email;
  var name=req.body.name;
  var password=req.body.password;

  var newUser=new User({email:email,name:name,password:password});
  newUser.save(function(error){
    if(error){
      res.json({registered:false})
    }
    else{
      res.json({
        registered:true
      })
    }
  })
})

module.exports=router;
