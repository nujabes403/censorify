/**
 * Created by KIM on 2015-03-20.
 */
var express = require('express');
var cons = require('consolidate');
var bodyParser = require('body-parser');
var app = express();

app.engine('html',cons.swig);
app.set('view engine','html');
app.set('views',__dirname+'/views');

function errorHandler(err,req,res,next){
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_handler',{error:err});
}

app.use(errorHandler);

app.get('/',function(req,res,next){
    res.render('fruitpicker',{'fruits':['apple','mango','grape','orange']});
});

app.post('/favorite_fruit',function(req,res,next){
    var favorite = req.body.fruit;
    if(typeof favorite == undefined){
        next(Error('Please choose a Fruit'));
    }
    else{
        res.send("Your Favorite Fruit is " + favorite);
    }
});

app.listen(3000);
console.log("Express server running on port 3000");
