// js supports oops(behind the scenes it is functional programming)

function printFirstName(name) {
  console.log(name);
}

function printLastName(name) {
  console.log(name);
}

console.log(printFirstName("arun"), printLastName("kumar"));

//HOF -> higher order function
// any function that takes in a function or returns one out of is a higher-order function

// ---------------------------------------------------------------------------//

const myRadiusArr = [2, 3, 5, 6, 7, 8];

//find for each circle area, circumference, and diameter
