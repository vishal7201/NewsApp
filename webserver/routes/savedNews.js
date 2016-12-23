const express = require('express');
const News = require('../models/news.js');

let router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
        res.json({redirect:true});
}

router.get('/', isLoggedIn, (req, res) => {
    let username = req.query.username;
    News.find({
           username: username
    }, function(err, userNews) {
        if (err) {
            res.json(err);
        }
        res.json(userNews);
    });
});
module.exports = router;
