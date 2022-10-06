// Me
const MY_NAME = 'Polina';
// Current year
const currentYear = new Date().getFullYear();
console.log(currentYear);


// *User name command
const yourName = prompt("What's your name?");
let userName = yourName;

// Check user name command
console.log(MY_NAME, 'their name is ' + userName);

// Greeting with user
alert(`Hi, ${userName}. How are you?`);



// *User age command
const yourBirthYear = prompt("What your birth year?");

// To calculate an user age
const userAge = currentYear - yourBirthYear;

// Check user age command
console.log(MY_NAME, 'they are: ' + userAge);

/* Info user with his age */
alert(`You have to be ${userAge}. Aren't you?`);



// *Calc area and perimeter of a square
const squareSide = prompt(
  "Write any size of square side and I'll show you smth:)"
);

// Perimeter
const squarePerimeter = squareSide * 4;
// Area
const squareArea = squareSide ** 2;

// Check square
console.log(MY_NAME, 'Perimeter is = ' + squarePerimeter, 'Area = ' + squareArea);

alert(
  `The square area equals ${squareArea} and perimeter is ${squarePerimeter}`
);




// *Calc circle
const circleRadius = prompt("Write any circle radius and I'll show you smth:)");

// Find circle area
let circleArea = Math.PI * circleRadius ** 2;
console.log(MY_NAME, 'circle area is ' + circleArea);

alert(`The circle area is ${circleArea}`);


// *User destination
const distance = prompt('Write the distance in you need to cover:');
const time = prompt('How fast do you want to get there?');

// Calc speed
let speed = distance / time;

console.log(MY_NAME, 'the speed is ' + speed, 'km/h');
alert(`You need to ride with ${speed} km/h`);



// *Change money 
const euro = prompt('How much euro do you want to change?');

const exchangeRate = 46.61;
let uah = exchangeRate * euro;

console.log(`${uah} uah`);
alert(`It will be: ${uah} uah`);