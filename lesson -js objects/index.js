// *First task
const car = {
  producer: "Fiat",
  model: 500,
  "car release": 2019,
  "average speed": 80,
  "fuel tank volume": 35,
  "fuel consumption": 6.2,
  driver: "Polina Kucher",
};

// Showing all info about car
function ShowCarInfo() {
  console.log(car);
  alert(
    "Produced by: " +
      car.producer +
      "\nModel: " +
      car.model +
      "\nCar was released in " +
      car["car release"] +
      " year" +
      "\nAverage speed: " +
      car["average speed"] +
      "\nFuel tank volume: " +
      car["fuel tank volume"] +
      " liter" +
      "\nFuel consumption: " +
      car["fuel consumption"] +
      "l" +
      "/100km" +
      "\nOwner: " +
      car.driver
  );
}
ShowCarInfo();

// Create new person
newOwner = (newOwner) => {
  if (newOwner) {
    car.newOwner = newOwner;
  }
};
newOwner("Joe Doy");

// Check if person exist
if ("newOwner" in car) {
  console.log("One more driver: " + car.newOwner);
}

const carDistance = () => {
  let distance = prompt("Write your distance: ");
  let timeInWay = distance / car["average speed"];
  let relax =
    timeInWay % 4 == 0 ? ((timeInWay / 4) | 0) - 1 : (timeInWay / 4) | 0;
  timeInWay =
    Math.round(timeInWay) + ((timeInWay - Math.round(timeInWay)) * 60) / 100;
  for (let hour = 1; hour <= timeInWay; hour++) {
    if (hour % 5 == 0) {
      relax++;
      timeInWay++;
    }
  }
  let timeTotal = Math.round(timeInWay + relax);
  let petrol = ((car["fuel consumption"] * distance) / 100).toFixed(2);
  alert(
    `You need: ${timeTotal} hours to overcome the distance, also you need ${petrol}l of petrol`
  );
  console.log(`You need: ${timeTotal} hours to overcome the distance`);
};
carDistance();

// *Second task
const date = new Date();

const time = {
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
};
console.log(time);

const ShowTime = () => {
  alert(time.hours + ":" + time.minutes + ":" + time.seconds);
};
ShowTime();

let changeHours = +prompt("How many hours do you want to add?");
let changeMinutes = prompt("How many minutes do you want to add?");
let changeSeconds = +prompt("How many seconds do you want to add?");

date.setHours(
  date.getHours() + changeHours,
  date.getMinutes() + changeMinutes,
  date.getSeconds() + changeSeconds
);
console.log(date);
alert(date);

// *Third task
const fraction = {
  numerator: 2,
  denominator: 3,
  // Get sum of objects
  addition: function (numerator2, denominator2) {
    let sum = this.numerator / this.denominator + numerator2 / denominator2;
    alert("Sum is " + sum.toFixed(2));
    console.log("Sum is " + sum.toFixed(2));
  },
  // Subtact the objects
  subtruction: function (numerator2, denominator2) {
    let subtr = this.numerator / this.denominator - numerator2 / denominator2;
    alert("Subtruction is: " + subtr.toFixed(2));
    console.log("Subtruction is: " + subtr.toFixed(2));
  },
  // Multiplicate the objects
  multiplication: function (numerator2, denominator2) {
    let multiplication =
      (this.numerator / this.denominator) * (numerator2 / denominator2);
    alert("Multiplication is " + multiplication.toFixed(2));
    console.log("Multiplication is " + multiplication.toFixed(2));
  },
  // Division of objects
  division: function (numerator2, denominator2) {
    let div = this.numerator / this.denominator / (numerator2 / denominator2);
    alert("Division is " + div.toFixed(2));
    console.log("Division is " + div.toFixed(2));
  },
};

// Enter new fraction
let numerator2 = prompt("Enter a numerator: ");
let denominator2 = prompt("Enter a denominator: ");

fraction.addition(numerator2, denominator2);
fraction.subtruction(numerator2, denominator2);
fraction.division(numerator2, denominator2);
fraction.multiplication(numerator2, denominator2);
