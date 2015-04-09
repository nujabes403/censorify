/**
 * Created by KIM on 2015-03-18.
 */
var express = require('express');
var cons = require('consolidate');
var app = express();

app.engine('html',cons.swig)
app.set('view engine','html');
app.set('views', __dirname + '/views');

app.get('/',function(req,res){
   res.render('hello',{'name':'Swig'});
});

app.get('*',function(req,res){
    res.send("Page Not Found",404)
});

app.listen(8080);
console.log("Express Server running on port 8080");
