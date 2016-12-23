const mongoose = require('mongoose');

let newsSchema = mongoose.Schema({
    username: String,
    newsArticle: Object,
    comments: String
});

let News = mongoose.model('News', newsSchema);

module.exports = News;
