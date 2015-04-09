/**
 * Created by KIM on 2015-03-11.
 */

function logCar(car,callback){
    console.log("Saw a " + car);
    if(cars.length){
        process.nextTick(function(){
            callback();
        });
    }
}