var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16*1024 });
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt', { encoding: 'utf-8', highWaterMark: 16*1024 });
var writable2 = fs.createWriteStream(__dirname + '/greetcopy2.txt');
/*
readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk);
});
*/


// we can also write the above function like this 
readable.on('data', readListener);

function readListener(chunk) {
    console.log(chunk);
    writable.write(chunk);
}


// faster way to read and write file by PIPE
readable.pipe(writable2);