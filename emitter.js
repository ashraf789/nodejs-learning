function Emitter(){
    this.events = {};
}

// event creation
Emitter.prototype.on = function(test, listener) {
    this.events[test] = this.events[test] || [];
    this.events[test].push(listener);
};

// event emitting
Emitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }  
};

module.exports = Emitter;