/**
 * Created by KIM on 2015-03-10.
 */
var ifElse = function(condition,isTrue,isFalse){
    if(condition){
        return isTrue();
    } else{
        return isFalse();
    }
};

var logTrue = function(){console.log(true);};
var logFalse = function(){console.log(false);};

ifElse(true,logTrue,logFalse);