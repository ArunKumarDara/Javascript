const a = [1, 2, 3, 4, 5];

console.log(a.length);

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

a.forEach((element) => {
  console.log(element);
});

a.forEach((element, index) => {
  if (index % 2 === 0) {
    console.log(element);
  }
});

a.push(6);

console.log(a);

a.shift();

a.unshift(7);

a.slice();
