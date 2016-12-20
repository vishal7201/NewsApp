var express=require('express');
var mongoose=require('mongoose');
var News=require('../models/news.js');

var router =express.Router();

router.get('/',((req,res)=>{
    var username=req.query.username;
    News.find({username:username},function(err,userNews){
      if(err){
        res.json(err);
      }
      res.json(userNews);
    });
}));
module.exports=router;
