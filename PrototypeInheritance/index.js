function Circle (radius) {
    this.radius = radius;
}

// Prototype Members
Circle.prototype.draw = function () {
    console.log('draw');
}

Circle.prototype.toString = function() {
    console.log('duplicate');
}