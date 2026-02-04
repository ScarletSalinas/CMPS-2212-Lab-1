//Scarlet Salinas
// CMPS2212 Lab 1
// 03/02/26
//File: exercise8.js

// Exercise 9

// Library object with properties: name and books (empty array)
const library = {
    name: 'City Library',
    books: [],
    
    // Method addBook(title, author, isbn) 
    // that creates a book object and adds it to books
    addBook(title, author, isbn) {

        const book = {
            title: title,
            author: author,
            isbn: isbn
        };
        this.books.push(book);
    },


    // method findBookByTitle(title) that returns the book object or null
    findBookByTitle(title) {
        return this.books.find(book => book.title === title) || null;
    },

    // method listAllBooks() that prints all book titles
    listAllBooks() {
        console.log(`Books in ${this.name}:`);
        for(let book of this.books) {
            console.log(`* "${book.title}" by ${book.author}`);
        } 
    },
};

// universityLibrary object using Object.create(library)
const universityLibrary = Object.create(library);

//courses property (array) to universityLibrary
universityLibrary.courses = [];
universityLibrary.name = 'University Library';  // name override
universityLibrary.books = []; //seperate books array

// method addCourseBook(courseName, title, author, isbn)
// that adds both the course and book 
universityLibrary.addCourseBook = function(courseName, title, author, isbn) {
    // Add course
    this.courses.push(courseName);

    // Add book using addBook method
    this.addBook(title, author, isbn);
}

// Bonus: method to search books by author using an arrow function with filter()
library.findBooksByAuthor = function(authorName) {
    return this.books.filter(book => 
        book.author.toLowerCase().includes(authorName.toLowerCase())
    );
};

//Testing

console.log("=== Testing addBook method === addBook method")
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565");
library.addBook("To Kill a Mockingbird", "Harper Lee", "978-0061120084");
library.addBook("1984", "George Orwell", "978-0451524935");

console.log("\n=== Testing listAllBooks method ===")
library.listAllBooks();

console.log("\n=== Testing findBookByTitle method ===");
console.log("Finding '1984':", library.findBookByTitle("1984"));
console.log("Finding 'The Great Gatsby':", library.findBookByTitle("The Great Gatsby"));
console.log("Finding 'Non-existent Book':", library.findBookByTitle("Non-existent Book"));

console.log("\n=== Testing addCourseBook method ===");
universityLibrary.addCourseBook("Literature 101", "Pride and Prejudice", "Jane Austen", "978-0141439518");
universityLibrary.addCourseBook("Spanish101 101", "Old Benque", "David Ruiz", "00000");
universityLibrary.addCourseBook("Literature 101", "Wuthering Heights", "Emily Brontë", "978-0141439556")
universityLibrary.listAllBooks();

// Testing bonus method
console.log("\n=== Testing findBooksByAuthor (bonus) ===");
console.log("Books by 'Fitzgerald':", library.findBooksByAuthor("Fitzgerald"));
console.log("Books by 'Orwell':", library.findBooksByAuthor("Orwell"));

