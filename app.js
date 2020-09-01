/**
 * emitter is our custom event 
 * event is the js package like our custom emitter
 */

var Emitter = require('./emitter');
var JSEmitter = require('events');

var emtr = new Emitter();
var jsEmiter = new JSEmitter();
emtr.on('greet', function(){
    console.log("Emitter first listener, hello world");
});

emtr.on('greet', function() {
    console.log("Emitter second listener, hello listener");
});

emtr.on('fire', function(){
    console.log("Emitter fire event define");
});

console.log('Hello, emitter listener is going to fire !!');
emtr.emit('greet');
emtr.emit('fire');

jsEmiter.on('test', function() {
    console.log("Test envent");
});
jsEmiter.on('test', function() {
    console.log("Test envent 2");
});

jsEmiter.emit('test');
