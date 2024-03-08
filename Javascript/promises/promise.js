// promises

const promise = new Promise((resolve, reject) => {
  const a = 5;
  const b = 5;
  if (a === b) {
    resolve("a is equal to b");
  } else {
    reject("a is not equal to b");
  }
});

console.log(promise);

// consumers

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// promise.catch((error) => {
//   console.log(error);
// });
