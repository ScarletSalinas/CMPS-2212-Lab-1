//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26
//File: exercise6.js

// Exercise 7

// person object with properties: 
const person = {
    species: 'Human',
    breathe() {
        return 'Breathing...';
    }
};

// employee object that inherits from person
const employee = Object.create(person);
employee.company = 'Tech Corp';
employee.position = 'Developer';

// manager object that inherits from employee
const manager = Object.create(employee);
manager.department = 'Engineering';
manager.team = [];

// manager method addTeamMember(name) that adds to the team array
manager.addTeamMember = function(name) {
    this.team.push(name);
};

// Show chain
console.log("Prototype Chain: manager → employee → person → Object.prototype → null");

// proof
// Step 1: manager's prototype is employee
const proto1 = Object.getPrototypeOf(manager);  // employee

// Step 2: employee's prototype is person  
const proto2 = Object.getPrototypeOf(proto1);   // person

// Step 3: person's prototype is Object.prototype (built-in JavaScript object)
const proto3 = Object.getPrototypeOf(proto2);   // Object.prototype

// Step 4: Object.prototype's prototype is null (end of chain)
const proto4 = Object.getPrototypeOf(proto3);   // null

// Verify each link in the chain
console.log("\nVerifying each link:");
console.log("1. Is manager's prototype employee?", proto1 === employee);
console.log("2. Is employee's prototype person?", proto2 === person);
console.log("3. Is person's prototype Object.prototype?", proto3 === Object.prototype);
console.log("4. Is Object.prototype's prototype null?", proto4 === null);