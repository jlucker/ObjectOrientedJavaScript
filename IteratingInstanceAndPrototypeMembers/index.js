
function Circle (radius) {
    // Instance Members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

const c1 = new Circle(1);

// Prototype Members
Circle.prototype.draw = function () {
    console.log('draw');
}

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance + prototype)
for (let key in c1) console.log(key);

