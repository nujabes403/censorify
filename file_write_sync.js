/**
 * Created by KIM on 2015-03-12.
 */
var fs = require('fs');
var veggieTray = ['carrots','celery','olives'];
var fd = fs.openSync('veggie.txt','w');
while(veggieTray.length){
    var veggie = veggieTray.pop() + " ";
    var bytes = fs.writeSync(fd,veggie,null,null);
    console.log("Wrote %s %dbytes",veggie,bytes);
}
fs.closeSync(fd);