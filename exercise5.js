//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26
//File: exercise4.js

// Exercise 6

const vehicle = {
    wheels: 4,
    describe() {
        return `This vehicle has ${this.wheels} wheels`;
    }
};

// Create a car object using Object.create(vehicle)
const car = Object.create(vehicle);

// Properties of car
car.make = "Toyota";
car.model = "Camry",
car.year = 2024;

// Call the describe() method on car (inherited from vehicle)
console.log(car.describe()); // "This vehicle has 4 wheels"
console.log(Object.hasOwn(car, 'make')); // true
console.log(Object.hasOwn(car, 'wheels')); // false
console.log(car.wheels); // 4 (from prototype)
