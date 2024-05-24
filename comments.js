// Create web server
// Using Express
// npm install express
// npm install body-parser

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comments', function(req, res) {
    console.log('Get comments');
    res.json({comments: comments});
});

app.post('/comments', function(req, res) {
    console.log('Post comments');
    var comment = req.body;
    comments.push(comment);
    res.json({comments: comments});
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

var comments = [