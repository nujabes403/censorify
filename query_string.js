/**
 * Created by KIM on 2015-03-13.
 */
var qstring = require('querystring');
var param = qstring.parse('name=Brad&color=red&color=blue');
console.log(param);

var strings = qstring.stringify(param);
console.log(strings);