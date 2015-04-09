/**
 * Created by KIM on 2015-03-12.
 */
var fs = require('fs');
var fruitBowl = ['apple','orange','banana','grapes'];

function writeFruit(fd){
    if(fruitBowl.length){
        var fruit = fruitBowl.pop() + " ";
        fs.write(fd,fruit,null,null,function(err,bytes){
            if(err){
                console.log("File error!");
            } else{
                writeFruit(fd);
            }
        });
    } else{
        fs.close(fd);
    }
}

fs.open('fruit2.txt','w',function(err,fd){
    writeFruit(fd);
});
