/**
 * Created by KIM on 2015-03-10.
 */
var increment = function(n){return n+1; };
var square = function(n){ return n*n; };

var doMathSoIDontHaveTo = function(n, func){
    return console.log(func(n));
};

doMathSoIDontHaveTo(5,square);
doMathSoIDontHaveTo(4,increment);