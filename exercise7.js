//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26
//File: exercise7.js

// Exercise 8

// Shape object with a method calculateArea() that returns 0
const shape = {
    calculateArea() {
        return 0;
    }
};

// Rectangle object created using Object.create(shape) with width and height properties
// Override the calculateArea() method in rectangle to return width * height
const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;
rectangle.calculateArea = function() {
    return this.width * this.height;
};

// circle object using Object.create(shape) with a radius property
// Override the calculateArea() method in circle to return π * radius²
const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function() {
    return Math.PI * this.radius * this.radius;
};

// Testing
console.log("Rectangle area:", rectangle.calculateArea());  // Rectangle area: 20
console.log("Circle area:", circle.calculateArea().toFixed(2));  // Circle area: 78.54