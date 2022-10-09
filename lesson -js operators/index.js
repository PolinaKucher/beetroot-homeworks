const MY_NAME = "Polina";
console.log("Hi i am", MY_NAME);

// First task: add decimal nembers and get the right result
let firstN = 0.1;
let secondN = 0.2;
let sum = firstN + secondN;

console.log(typeof +sum.toFixed(1), +sum.toFixed(1));

alert(`0.1 + 0.2 = ${+sum.toFixed(1)}`);

// Second task: add string and number and get a number
let stringOne = "1";
let numberTwo = 2;
let sum2 = +stringOne + numberTwo;
console.log(typeof sum2, sum2);

alert(`'1' + 2 = ${sum2}`);

// Third task: calc the amout of files user can have on his flash drive
const flashDrive = prompt("How much memory is on your flash drive, in Gb?");
let filesNumber = +flashDrive / 0.82;
console.log(typeof +filesNumber.toFixed(), +filesNumber.toFixed());

alert(
  `You can have ${filesNumber.toFixed()} files for 820mb on your flash drive`
);

// Fourth task: get amount of chocolate user can have and the rest of money
const money = prompt("How much money do you have?");
const chocoPrise = prompt(" How much cost one chocolate?");
let chocoAmount = Math.floor(+money / +chocoPrise);
let allChocoPrise = +chocoAmount * +chocoPrise;
let rest = Math.floor(+money - +allChocoPrise);

console.log(
  `${MY_NAME}, they can have ${chocoAmount} chocolats and the change will be ${rest} $`
);
alert(`You can have ${chocoAmount} chocolats and the change will be ${rest} $`);

// Fifth task: revers three-digit number
let userNumber = prompt("Please write any three-digit number:");

let x1 = userNumber % 10;
console.log(x1);

userNumber -= x1;

let x2 = (userNumber / 10) % 10;
console.log(x2);

userNumber -= x2 * 10;

let x3 = (userNumber / 100) % 10;
console.log(x3);

console.log(`${MY_NAME}: ${x1}${x2}${x3}`);
alert(`In revers it will be: ${x1}${x2}${x3}`);

// Get the amount of the deposit for 2 months at 5% per annum
let userMoney = prompt('How much money do you wnat to put on deposit for 2 months at 5% per annum?');

let income = (userMoney * 5 * 60 / 365) / 100;
console.log(`${MY_NAME}, income will be: ${income.toFixed(2)}`);

alert(`Your income will be: ${income.toFixed(2)}`)


// What will return
// return 0, cause 0=false and that operator stops after finding false 
let lastTask = 2 && 0 && 3;
console.log(`${MY_NAME}: ${lastTask}`);
// return 2, cause that operator stops after finding true, 2 = true and 0 = false so return 2
lastTask = 2 || 0 || 3;
console.log(`${MY_NAME}: ${lastTask}`);
// operator || has a higher priority, and so it returns true(3)
lastTask = 2 && 0 || 3;
console.log(`${MY_NAME}: ${lastTask}`);