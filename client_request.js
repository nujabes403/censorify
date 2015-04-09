/**
 * Created by KIM on 2015-03-13.
 */
var http = require('http');
var options = {
    hostname:'www.myserver.com',
    path:'/',
    port:'8080',
    method:'POST'
};
var req = http.request(options,function(response){
    var str = "";
    response.on('data',function(chunk){
        str += chunk;
    });
    response.on('end',function(){
        console.log(str);
    });
});

req.end();