/**
 * Created by KIM on 2015-03-10.
 */

var Toaster = function (){

    var temperature = 0;
    var maxTemperature = 40;
    var heat = function(){
        var heatTimer = setInterval(function(){
            if(temperature === maxTemperature){
                console.log("Done! Help yourself!");
                clearInterval(heatTimer);
            } else{
                temperature++;
                console.log("Current temperatue : " + temperature);
            }
        },1000);
    };

    return {
        turnOn:function(){
            temperature = 25;
            console.log("Turn On!");
            heat();
        },
        turnOff:function(){
            temperature = 0;
            console.log("temperature: " + temperature);
            console.log("Turn Off!");
        }
    };

};

var GoogleToaster = Toaster();
GoogleToaster.turnOn();