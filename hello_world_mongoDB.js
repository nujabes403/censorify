/**
 * Created by KIM on 2015-03-18.
 */
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/test',function(err,db){
    if(err) throw err;

    db.collection('coll').findOne({},function(err,doc){
        if(err) throw err;

        console.dir(doc);

        db.close();
    });
    console.dir("Called findOne");
});