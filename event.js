var EventEmitter = require('events')
var util =require('util')

var MyEmitter = function() {

}

util.inherits(MyEmitter, EventEmitter)
console.log('1')
const myEmitter = new MyEmitter()
myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
      // Prints: a b {}
  });
  
myEmitter.emit('event', 'a', 'b');