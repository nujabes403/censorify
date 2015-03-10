/**
 * Created by KIM on 2015-03-10.
 */
var once = function(func){
    var beenCalled = false;

    var onceVerFunc = function(){
        return (function(){
            if(beenCalled){
                console.log("Can't call anymore");
            } else{
                beenCalled = true;
                return func;
            }
        }());
    };
    return onceVerFunc;
};

var chargeCreditCard = function(num, price){
    console.log("Card: " + num + " " + "Price: " + price);
};

var processPaymentOnce = once(chargeCreditCard);
processPaymentOnce()(1234,200);
