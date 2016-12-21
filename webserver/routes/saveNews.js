var express=require('express')
var mongoose=require('mongoose')
var News=require('../models/news');

var router =express.Router();
router.get('/',(req,res)=>{
  res.send("hello");
})

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


router.put('/',function(req,res){
  console.log("put");
  var newsId=req.body.newsId;
  var comments=req.body.comments;
  News.findById({_id:newsId},function(error,data){
    if(error){
    res.json({"updated":false,"error":error});
    }
    else{
      data.comments=comments;
      data.save(function(err){
        if(err){
          console.log("Error in save update");
          res.json({"updated":false,"error":error})
        }
        else{
          res.json({"updated":true})
        }
      })
    }
  })
});

router.route('/:newsId').delete(function(req,res){
  console.log(req.params.newsId);
  News.remove({_id:req.params.newsId}, function(err) {
    if (err) {
      res.json({"deleted":err});
    }
    else{
      res.json({"deleted":true});
    }

});

})


module.exports=router;
