/**
 * Created by KIM on 2015-03-11.
 */
var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(var i = 0 ; i < nameArr.length ; i++){

        resultArr.push(function(){ console.log('Is', nameArr[i], 'present?', i)})
    };
    return resultArr;
};

var arr = ["Kim","Chiari","Bianca"];
var funcArr = checkAttendanceFunc(arr);
funcArr[0]();
funcArr[1]();
funcArr[2]();

