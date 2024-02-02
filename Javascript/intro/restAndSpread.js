const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const arr2 = [];

for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i]);
}

for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i]);
}

console.log(arr2);

console.log([...arr, ...arr1]);

function myBio(fn, ln, ...rest) {
  return {
    firstName: fn,
    lastName: ln,
    ...rest,
  };
}

console.log(myBio("John", "Doe", 25, "male"));

let a = 10;
let b = 20;

[b, a] = [a, b];
console.log(a);
console.log(b);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [f, g, ...h] = arr3;
console.log(h);
