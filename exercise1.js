//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26

//File: exercise1.js

// Function declaration calculateArea 
// that takes length and width parameters 
// and returns their product
function calculateArea(length, width) {
    return length * width;
}

// Testing
console.log(calculateArea(5, 10)); // Expected: 50
console.log(calculateArea(7, 3)); // Expected: 21
console.log(calculateArea(4, 4)); // Expected: 16

// Function expression calculatePerimeter 
// that takes length and width parameters
// and returns the perimeter
const calculatePerimeter = function(length, width) {
    return 2 * length + 2 * width;
}

// Testing
console.log(calculatePerimeter(5, 10)); // Expected: 30
console.log(calculatePerimeter(7, 3)); // Expected: 20
console.log(calculatePerimeter(4, 4)); // Expected: 16