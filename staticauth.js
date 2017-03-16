//authsession.js
"use strict";
var express = require('express'),
    app = express(),
    session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var util = require("util");
app.use(express.static('public'));

var users = require("./users.json");
    // app1 = usuarios();

var bcrypt = require("bcrypt-nodejs");
var hash = bcrypt.hashSync("amyspassword");
var hash1 = bcrypt.hashSync("juanpassword");
var hash2 = bcrypt.hashSync("antoniopassword");
console.log('passwords hashed =', hash, hash1, hash2);

var users = { 
  amy : hash, 
  juan : bcrypt.hashSync("juanpassword"),
  antonio : bcrypt.hashSync("antoniopassword") 
};

var instructions = 'Visit these urls in the browser:<ul>  <li> <a href="https://1-informatica-nico-apache.c9.io:8080/content">https://1-informatica-nico-apache.c9.io:8080/content</a> </li>  <li> <a href="https://1-informatica-nico-apache.c9.io:8080/content/chapter1.html">https://1-informatica-nico-apache.c9.io:8080/content/chapter1.html</a> </li>  <li> <a href="https://1-informatica-nico-apache.c9.io:8080/login?username=juan&password=juanspassword">https://1-informatica-nico-apache.c9.io:8080/login?username=juan&password=juanspassword</a> </li>  <li> <a href="https://1-informatica-nico-apache.c9.io:8080/login?username=amy&password=amyspassword">https://1-informatica-nico-apache.c9.io:8080/login?username=amy&password=amyspassword</a> </li>  <li> <a href="https://1-informatica-nico-apache.c9.io:8080/logout">https://1-informatica-nico-apache.c9.io:8080/logout</a> </li></ul>';


var layout = function(x) { return x+"<br />\n"+instructions; };

app.use(cookieParser());
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));
 
app.use(function(req, res, next) {
  console.log("Cookies :  "+util.inspect(req.cookies));
  console.log("session :  "+util.inspect(req.session));
  next();
});

// Authentication and Authorization Middleware
var auth = function(req, res, next) {
  if (req.session && req.session.user in users)
    return next();
  else
    return res.sendStatus(401); // https://httpstatuses.com/401
};
 
// Login endpoint
app.get('/login', function (req, res) {
  console.log(req.query);
  if (!req.query.username || !req.query.password) {
    console.log('login failed');
    res.send('login failed');    
  } else if(req.query.username in users  && 
            bcrypt.compareSync(req.query.password, users[req.query.username])) {
    req.session.user = req.query.username;
    req.session.admin = true;
    res.send(layout("login success! user "+req.session.user));
  } else {
    console.log("login "+util.inspect(req.query)+" failed");    
    res.send(layout("login "+util.inspect(req.query)+" failed. You are "+req.session.user+" not logged"));    
  }
});
 
app.get('/', function(req, res) {
  res.send(instructions);
});
// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send(layout("logout success!"));
});
 
// Get content endpoint
app.get('/content/*?', 
    auth  // next only if authenticated
);
 
app.use('/content', express.static(path.join(__dirname, 'public')));

app.listen(8080);
console.log("app running at https://1-informatica-nico-apache.c9.io:8080");