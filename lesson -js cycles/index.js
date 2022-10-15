// Me
const MY_NAME = "Polina";
console.log("Hi i am", MY_NAME);

// First task
const CHILD_MAX_AGE = 11;
const TEEN_MAX_AGE = 17;
const ADULT_MAX_AGE = 59;

const userAge = +prompt("How old are you?", 0);

if (isNaN(userAge)) {
  throw new Error("Please use only numbers:)");
} else if (userAge <= 0) {
  throw new Error("Please enter real age");
} else {
  if (userAge <= CHILD_MAX_AGE) {
    console.log(MY_NAME, "they are child");
    alert("You are a child");
  } else if (userAge <= TEEN_MAX_AGE) {
    console.log(MY_NAME, "they are a teenager");
    alert("You are a teenager");
  } else if (userAge <= ADULT_MAX_AGE) {
    console.log(MY_NAME, "they are an adult");
    alert("You are an adult");
  } else {
    console.log(MY_NAME, "they are old");
    alert("You are old");
  }
}

// Second task
const numbers = +prompt("Write any number from 0 to 9 and I'll it's symbol:");
switch (numbers) {
  case 1:
    console.log(MY_NAME, "the symbol for 1 is !");
    alert("!");
    break;
  case 2:
    console.log(MY_NAME, "the symbol for 2 is @");
    alert("@");
    break;
  case 3:
    console.log(MY_NAME, "the symbol for 3 is #");
    alert("#");
    break;
  case 4:
    console.log(MY_NAME, "the symbol for 4 is $");
    alert("$");
    break;
  case 5:
    console.log(MY_NAME, "the symbol for 5 is %");
    alert("%");
    break;
  case 6:
    console.log(MY_NAME, "the symbol for 6 is ^");
    alert("^");
    break;
  case 7:
    console.log(MY_NAME, "the symbol for 7 is &");
    alert("&");
    break;
  case 8:
    console.log(MY_NAME, "the symbol for 8 is *");
    alert("*");
    break;
  case 9:
    console.log(MY_NAME, "the symbol for 9 is (");
    alert("(");
    break;
  case 0:
    console.log(MY_NAME, "the symbol for 0 is )");
    alert(")");
    break;
}

// Third task
let start = +prompt("Write the begining of a range:");
let end = +prompt("Write the end of a range:");
let sum = 0;
while (start <= end) {
  sum += start;
  start++;
}
console.log(MY_NAME, `the sum of the numbers in the range is: ${sum}`);
alert(`The sum of the numbers in the range is: ${sum}`);

// Fourth
let firstNum = +prompt("Write any number:");
let secondNum = +prompt("Write any bigger number:");
const gcd = (n, m) => {
  if (m !== 0) {
    const k = n % m;
    return gcd(m, k);
  }
  return n;
};
alert(
  "GCD numbers " +
    firstNum +
    " and " +
    secondNum +
    " will be: " +
    gcd(firstNum, secondNum)
);

// Fifth
let anyNum = +prompt("Write a number and i'll show all it's divisors:");
for (let i = 1; i <= anyNum; i++) {
  if (anyNum % i == 0) {
    console.log(i);
    alert(i);
  }
}

// Sixth
let b;
let c;
let e;
let a = +prompt("Write five-digit number and we'll see if it is palindrome:");
if (a > 9999 && a < 100000) {
  b = a / 10000;
  a %= 10000;
  c = a / 1000;
  a %= 1000;
  a %= 100;
  e = a / 10;
  a %= 10;
  if (b == a && c == e) {
    alert("This number is the palindrome!");
  } else {
    alert("It is not the palindrome");
  }
} else {
  alert("You have written a not five-digit number");
}

// Seventh
let price = +prompt("How much have you spend?");

if (price >= 200 && price < 300) {
  price -= (price / 100) * 3;
  console.log(MY_NAME + " the price with discount 3% is: " + price);
  alert("The price with discount 3% is: " + price);
} else if (price >= 300 && price < 500) {
  price -= (price / 100) * 5;
  console.log(MY_NAME + " the price with discount 5% is: " + price);
  alert("The price with discount 5% is: " + price);
} else if (price >= 500) {
  price -= (price / 100) * 7;
  console.log(MY_NAME + " the price with discount 7% is: " + price);
  alert("The price with discount 7% is: " + price);
}

// Eighth
let q1 = 0,
  q2 = 0,
  q3 = 0,
  q4 = 0,
  q5 = 0;
let num1;
for (let i = 0; i < 10; i++) {
  num1 = +prompt("Write " + (i + 1) + " number: ");
  if (num1 > 0) {
    q1++;
  } else if (num1 % 2 == 0) {
    q4++;
  } else if (num1 % 2 !== 0) {
    q5++;
  } else if (num1 === 0) {
    q3++;
  } else if (num1 < 0) {
    q2++;
  }
}
alert("The number of even: " + q4);
alert("The number of odd: " + q5);
alert("The number of positive ones: " + q1);
alert("The number of negative ones: " + q2);
alert("The number of null: " + q3);

// Ninth 
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];
let isDay = 0;
while (confirm(`${days[isDay]}. Wanna see the next day?`)) {
  isDay = (isDay + 1) % days.length;
}