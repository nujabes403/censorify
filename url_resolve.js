/**
 * Created by KIM on 2015-03-13.
 */
var url = require('url');
var originalUrl = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var newResource = '/another/path?querynew';

console.log(url.resolve(originalUrl,newResource));