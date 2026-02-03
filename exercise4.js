//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26
//File: exercise4.js

// Exercise 5
const book = {
    title: "Javascript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    isbn: "978-0596517748"
};

// Function displayProperty prints the property value
// Using bracket notation: obj[propertyName]
function displayProperty(obj, propertyName) {
    console.log(obj[propertyName]);
}

// Function updateProperty  updates a property
function updateProperty(obj, propertyName, newValue) {
    obj[propertyName] = newValue;
}

// Testing
displayProperty(book, "title");  // "Javascript: The Good Parts"
displayProperty(book, "author"); // "Douglas Crockford"
displayProperty(book, "year");   // 2008

updateProperty(book, "year", 2024);
displayProperty(book, "year");

