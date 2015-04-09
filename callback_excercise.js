/**
 * Created by KIM on 2015-03-10.
 */
var once = function(func){
    var ran = false;
    var memo=null;

    return function() {
        if (ran) {
            console.log("You can't call it anymore");
            return memo;
        }
        ran = true;
        memo = func.apply(this, arguments);
        func = null;
        return memo;
    }
};

var chargeCreditCard = function(num, price){
    console.log("Card: " + num + " " + "Price: " + price);
};

var processPaymentOnce = once(chargeCreditCard);
processPaymentOnce(1234,200);
processPaymentOnce(1234,200);
processPaymentOnce(1234,200);

