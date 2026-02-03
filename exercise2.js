//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26

//File: exercise2.js
// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Arrow function with map() that squares each number in array
const squared = numbers.map(num => {
    return num * num;
});

// Arrow function with filter() to get only even numbers
const even = numbers.filter(num => {
    return num % 2 === 0;
});

// Arrow function with reduce() to sum all numbers
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

// Testing
console.log(`Squared: [${squared.join(', ')}]`); // Expected Output: Squared: [1, 4, 9, 16, 25]

console.log(`Even numbers: [${even.join(', ')}]`); // Expected Output: Even numbers: [2, 4]

console.log(`Sum: ${sum}`);  // Expected outcome: Sum: 15