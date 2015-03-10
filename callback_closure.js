/**
 * Created by KIM on 2015-03-08.
 */
function logCar(logMsg, callback){
    process.nextTick(function(){
        callback(logMsg);
    });
}

var cars = ["Ferrari","Porshe","Bugatti"];

for (var idx in cars){
    var message = "Saw a " + cars[idx];

    logCar(message,function(){
        console.log("Normal Callback: "+message);
    });
}

for(var idx in cars){
    var message = "Saw a " + cars[idx];

    (function(msg){
        logCar(msg,function(){
            console.log("Clousre Callback: "+msg);
        });
    })(message);
}