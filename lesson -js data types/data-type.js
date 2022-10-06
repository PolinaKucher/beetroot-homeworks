// Me
const me = 'Polina';

// Number
const myNumber = 911;
console.log(me, myNumber, 'is a', typeof myNumber); 

// BigInt
const myBigInt = 13n;
console.log(myBigInt, typeof myBigInt);

// String
const myString = "turtles";
console.log(me, myString, 'is a', typeof myString);

// Undefined
let myUnd;
console.log(me, myUnd, 'is an', typeof myUnd);

// Boolean 
const myBoo = false;
console.log(me, myBoo, 'is a', typeof myBoo);

// *Null is used to make 'nothing' and is an object
const myNull = null;
console.log(me, myNull, 'is an', typeof myNull)

// Symbol
const mySym = Symbol('smth');
console.log(me, mySym, 'is a', typeof mySym);

// Object
const myObj = Object(mySym);
console.log(me, myObj, 'is an', typeof myObj);



// *Change types
// Number to string
const a = 988;
console.log(a, a.toString());

// String to number
const b = '45';
console.log(b, typeof b, parseInt(b), typeof parseInt(b));
console.log(+b, typeof +b);

// String to boolean
const string1 = 'true';
const boo1 = string1 === 'true';
console.log(string1, typeof string1, boo1, typeof boo1);

const boo2 = !!string1;
console.log(boo2, typeof boo2);

// Boolean to string
const boo3 = true;
console.log(boo3, typeof boo3, boo3.toString(), typeof boo3.toString());


