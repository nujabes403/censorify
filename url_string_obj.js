/**
 * Created by KIM on 2015-03-13.
 */
var url = require('url');
var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var urlObj1 = url.parse(urlStr,true,false);
var urlObj2 = url.parse(urlStr,false,false);
console.log(urlObj1);
console.log(urlObj2);
var urlString = url.format(urlObj1);
console.log(urlString);

