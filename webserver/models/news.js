var mongoose= require('mongoose');

var newsSchema=mongoose.Schema({
  username:String,
  newsArticle:Object,
  comments:String
});

var News=mongoose.model("News",newsSchema);

module.exports=News;
