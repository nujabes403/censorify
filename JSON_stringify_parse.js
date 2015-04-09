/**
 * Created by KIM on 2015-03-11.
 */
var accountObj = {
    name: "Baggins",
    number:10645,
    members:["Frodo,Bilbo"],
    location:"Shire"
};

var accountStr = JSON.stringify(accountObj);

console.log(accountStr);

var accountStr = '{"name":"Baggins","number":10645,"members":["Frodo,Bilbo"],"location":"Shire"}';
var accountObj1 = JSON.parse(accountStr);
console.log(accountObj1);