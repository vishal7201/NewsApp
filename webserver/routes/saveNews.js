const express = require('express');
const News = require('../models/news');

let router = express.Router();
router.get('/', (req, res) => {
    res.send('hello');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
        res.json({redirect:true});
  }


router.post('/', isLoggedIn, function(req, res) {
    let username = req.body.username;
    let newsArticle = req.body.newsArticle;
    let comments = req.body.comments;
    let news = new News({
        username: username,
        newsArticle: newsArticle,
        comments: comments
    });
    news.save((error) => {
        if (error) {
            res.json({
                saved: false,
                error: error
            });
        } else {
            res.json({
                saved: true
            });
        }
    });
});

router.put('/', isLoggedIn, function(req, res) {
    let newsId = req.body.newsId;
    let comments = req.body.comments;
    News.findById({
        _id: newsId
    }, function(error, data) {
        if (error) {
            res.json({
                updated: false,
                error: error
            });
        } else {
            data.comments = comments;
            data.save(function(err) {
                if (err) {
                    console.log('Error in save update');
                    res.json({
                        updated: false,
                        error: error
                    })
                } else {
                    res.json({
                        updated: true
                    })
                }
            })
        }
    })
});

router.route('/:newsId').delete(function(req, res) {
    News.remove({
        _id: req.params.newsId
    }, function(err) {
        if (err) {
            res.json({
                deleted: err
            });
        } else {
            res.json({
                deleted: true
            });
        }
    });
});


module.exports = router;
