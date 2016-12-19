var express= require('express');
var mongoose=require('mongoose');
var User=require('../models/user');

var router= express.Router();

router.post('/',function(req,res){
   var email=req.body.email;
   var password=req.body.password;

  User.findOne({email:email,password:password},function(err,user){
    //console.log("hiiiiiiiiiiiii");
    if(err){
      res.json({auth:false,error:'connection error'});
    }
    else{
        if(!user){
          res.json({auth:false,error:'Invalid cridentials'})
        }
        else{
          res.json({auth:true})
        }
    }
  })
});

module.exports=router;
