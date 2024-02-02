//function declaration || statement

function SayHi(from, to) {
  console.log(`Hi ${from} to ${to}`);
}

//arguments
SayHi("Arun", "Meghana");

//function expression
const FE = function (from, to) {
  console.log(`Hi ${from} to ${to}`);
};

FE("Arun", "Honey");

//named funstion expression

//Arrow functions -> ES6
const Hello = (from, to) => {
  console.log(`Hi ${from} to ${to}`);
};
//
Hello("Arun", "Akhil");

//functions can be used as methods and as variables  can be passed in to function
//can be returned in to function

const hello = () => {
  return "Hello, Arun Kumar";
};

const helloWorld = (params) => {
  return params;
};

console.log(helloWorld(hello()));
