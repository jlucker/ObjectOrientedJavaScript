
// Constructor Function
function Circle (radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// first argument is ths target for "this" keyword
Circle.call({}, 1)
Circle.apply({}, [1, 2, 3]);

const another = new Circle(1);