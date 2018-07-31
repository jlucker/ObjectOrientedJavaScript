
function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    
    this.reset = function() {

    };
    this.start = function() {

    };
    this.stop = function() {

    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() { return defaultLocation; },
        set: function(value) { defaultLocation = value; }
    });
}