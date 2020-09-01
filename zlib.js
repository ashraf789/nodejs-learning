/**
 * read data from txt file and write to a zip file
 */
var fs = require('fs');
var zlib = require('zlib');

// write to compress file
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname + '/greet.txt');
readable.pipe(gzip).pipe(compressed);