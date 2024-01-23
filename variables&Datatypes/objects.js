const captainAmerica = {
  name: "steve rogers",
  age: 165,
  allies: ["Tony", "Bucky", "Natasha", "Dr Banner", "Thor"],
  address: {
    country: "United States",
    city: {
      name: "Brooklyn",
      zipcode: 12345,
    },
  },
  isAvenger: true,
  SayHi: function () {
    console.log("Captain says hi");
  },
};

// accessing the items of objects
console.log(captainAmerica.name);
console.log(captainAmerica.SayHi());

// updating items of objects
captainAmerica.isAvenger = false;

//adding
captainAmerica.movies = [
  "Civil War",
  "End Game",
  "The Avengers",
  "Age of Ultron",
  "The First Avenger",
];

console.log(captainAmerica);

//delete
delete captainAmerica.movies;
