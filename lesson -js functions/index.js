// Task two
function checkArgsNumber() {
  console.log(arguments.length);
}
checkArgsNumber(1, 2, 4, 65);

// Task three
const checkNum = (firstNum, secondNum) => {
  if (firstNum < secondNum) {
    return -1;
  } else if (firstNum > secondNum) {
    return 1;
  } else if (firstNum == secondNum) {
    return 0;
  }
};
console.log(checkNum(20, 3));
console.log(checkNum(2, 4));

// Task four
function factorial(n) {
  result = n;
  for (let i = n - 1; i > 1; --i) {
    result *= i;
  }
  return result;
}
console.log(factorial(66));

// Task five
const createNumber = (firstN, secondN, thirdN) => {
  let calcNumbers = firstN.toString() + secondN.toString() + thirdN.toString();
  console.log(calcNumbers);
};
createNumber(1, 4, 9);

// Task sixth
function calcRecArea(recLenght, recWidth) {
  if (recLenght && recWidth) {
    return recLenght * recWidth;
  } else {
    return recLenght ** 2 || recWidth ** 2;
  }
}
console.log(calcRecArea(2, 50));
console.log(calcRecArea(50));

// Task seven
const perfectNumber = (a) => {
  let result = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      result += i;
    }
  }
  if (a === result) {
    return true;
  } else {
    return false;
  }
};
console.log(perfectNumber(22));
console.log(perfectNumber(6));


