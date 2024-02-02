const a = 10;
const b = -10;
const c = 10.5;
const d = -10.5;
console.log(a, b, c, d);

console.log(typeof a, typeof b, typeof c, typeof d);

// null
const e = null;
console.log(e);
console.log(typeof e);

// boolean
const g = true;
console.log(g);
console.log(typeof g);

// undefined
const h = undefined;
console.log(h);
console.log(typeof h);

// undefined || not defined
// not defined talks about variables which not defined
console.log(alpha);

// undefined -> when variable defined bot not initilized
let z;
console.log(z);

// primitive Datatypes

// arrays
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr);

// objects -> custom data type which can store any data
const obj = {
  name: "arun",
  age: 24,
  isMarried: false,
};
console.log(obj);
console.log(typeof obj);

// functions -> create a function when u want to perform specific task again and again
// (..,..,) -> function parameters
// {} is called a function body
const add = (a, b) => {
  console.log(a + b);
};

function add(a, b) {
  console.log(a + b);
}

function coffeeMachine(quantity, drink) {
  return `I need ${quantity} ${drink} to make coffee`;
}

console.log(coffeeMachine(1, "coffee"));
console.log(coffeeMachine(2, "coffee"));
