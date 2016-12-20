var express=require('express')
var mongoose=require('mongoose')
var News=require('../models/news');

var router =express.Router();

router.post('/',function(req,res){

    var username=req.body.username;
    var newsArticle=req.body.newsArticle;
    var comments=req.body.comments;
    var news=new News({username:username,newsArticle:newsArticle,comments:comments});
  news.save((error)=>{
    if(error){
      res.json({'saved':false,error:error});
    }
    else{
      res.json({'saved':true});
    }
  })
});

module.exports=router;
