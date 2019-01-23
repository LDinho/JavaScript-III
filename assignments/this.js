/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" can refer to the window/global object. (window)
* 2. "this" can refer to the object that is left to the dot that precedes the function being called. (implicit / automatic)
* 3. "this" can be explicitly defined with the use of `.call` and `.apply.` (explicit)
* 4. "this" can refer to a specific instance of an object created with the `new` key word. (new binding)
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const greet = function (name) {
  // 'use strict';
  console.log(this);
  return name;
}
// console.log(greet('jon'));

// Principle 2

// code example for Implicit Binding
const man = {
  firstName: 'Jon',
  lastName: 'Doe',
  speak: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`)
  }
}
man.speak();

// Principle 3

// code example for New Binding
function Car(make, gas){
  this.make = make;
  this.gas = gas;
  this.drive = function () {
    console.log('object', this);
      return `This ${this.make} has ${this.gas} gallons and is drivable`;
  }
}
const car1 = new Car('toyota', 2);
console.log(car1.drive());

// Principle 4

// code example for Explicit Binding
const books = ['Learn JS', 'Demystify React', 'A Look Into Vue.js']

const author = {
  name: 'Jon',
  book: 'A Look Into Vue.js',
}

function printAuthorAndBook(book1, book2) {
  'use strict';
  console.log(`Author ${this.name} wrote this book: ${this.book}, `);
  console.log(`Author ${this.name} also wrote: ${book1}, and ${book2}.`)
}

printAuthorAndBook.call(author, ...books);
// printAuthorAndBook.apply(author, books);
// printAuthorAndBook();
