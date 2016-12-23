var path = require('path');
var webpack = require('webpack');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./webserver/models/user');


var config = require('./webpack.config');
var saveNews = require('./webserver/routes/saveNews');
var savedNews = require('./webserver/routes/savedNews');


var app = express();
var compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(require('express-session')({
    secret: 'vishal',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, './webclient/')));

//Mongoose
var db = 'mongodb://localhost/test';
mongoose.connect(db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connnected with mongo");
});


//Ruotes
app.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

app.use('/save', saveNews);
app.use('/savedNews', savedNews);
app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            res.json({
                'login': false
            })
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.json({
                'login': true,
                'id': user.id
            });
        });
    })(req, res, next);
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            console.log(username);
            console.log(password);
            if (err) {
                console.log('error');
                return done(err);
            }
            if (!user) {
                console.log('incorrect username');
                return done(null, false, {
                    message: 'Incorrect username'
                });
            }
            if (user.password != password) {
                console.log('incorrect password');
                return done(null, false, {
                    message: 'Incorrect password'
                });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});



app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8090
app.listen(8090, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8090");
});
