﻿// console.log(10 + 20);
// 10+20;
// var x = 10;
// var y = 20;
// var z = x + y;
// console.log(z);

// var m = 100;
// var n = 200;
// var p = m + n;
// console.log(p);

// function functionName(input) {
//   expressions;
// }

// function mahesh(first, second, third) {
//   //   console.log('first', first, '+', 'second', second, '=', first + second);
//   //   console.log(first + second);
//   console.log(first);
//   console.log(second);
//   console.log(third);
//   return first + second + third;
// }

// console.log(mahesh(10, 20, 30));
// console.log(mahesh(10, 50));
// console.log(mahesh(100, 50));

// function printNumbers(start, end) {
//   for (var i = start; i <= end; i = i + 2) {
//     console.log(i);
//   }
// }

// // printNumbers(0, 10);
// printNumbers(20, 30);

// function multiply(start, end) {
//   console.log(start * end);
// }

// // multiply(10, 20);
// multiply();

// function division(divident, divider) {
//   console.log(divident / divider);
// }

// division(50, 10);

// function xyz(a, b) {
//   console.log(a, b);
//   console.log(a + b);
// }

// Each and every function in JS have arguments and this with in it.
// function xyz() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   console.log(this);
// }

// xyz(1, 2);

// function add() {
//   var sum = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     sum = sum + arguments[index];
//   }
//   console.log(sum);
//   return sum;
// }
// add();
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);

// Based on the way you call your function the value of this is going to change. ie. the context of this will vary.
// function xyz() {
//   console.log('xyz() ====> ', this); // Window
// }

// function abc() {
//   console.log('abc() ===> ', this); // abc
// }
// // + - * / ++ -- += -= new
// xyz();
// new abc();

// Function Declaration
// function multiply(x, y) {
//   return x * y;
// }

// var secondMultiply = multiply;

// console.log(multiply(2, 3));
// console.log(secondMultiply(2, 9));

// // Function Expression
// // anonimus==no name
// var sum = function test(a, b) {
//   return a * b;
// };

// console.log(sum(2, 3)); //sum
// var add = sum;

// console.log(add(2, 3)); // add

// console.log(test(5, 8));

// console.log(multiply(5, 8));
// console.log(sum(5, 8));

// function multiply(x, y) {
//   return x * y;
// }
// var sum = function(a, b) {
//   return a * b;
// };

// 1. Function declaration and function expression
// 2. Function expression can be renamed or assigned but right side cant be accessed
// 3. Function declarations are hoisted but function expressions are not hoisted

// Function Over loading
// function add(a, b) {
//   return a + b;
// }

// function add(a, b, c) {
//   console.log(a + b + c);
// }

// function add() {
//   return 0;
// }

// console.log(add(1, 2)); //3
// console.log(add(1, 2, 6)); //9
// console.log(add()); //0

// Recursion

// function printNum(a) {
//   // console.log(a % 2);

//   if (a % 2) {
//     console.log(a, 'is an odd number');
//   } else {
//     console.log(a, 'is an even number');
//   }

//   if (a === 10) {
//     return a;
//   } else {
//     return printNum(++a);
//   }
// }

// function pow(x) {
//   console.log(x);
//   if (x == 10) {
//     return x;
//   } else {
//     return pow(++x);
//   }
// }

// printNum(4);
// pow(0);

// Javascript: variables are function scoped. Not block scoped with var
var b = 10;

function someFunction() {
  var b = 20;
  var a = 30;
  console.log(b);
}

if (b == 10) {
  var c = 90;
}

console.log(b); //20
someFunction();

console.log(b); //10
console.log(c); //undefined,
// console.log(a); //error

for (var index = 0; index < 20; index++) {}
console.log(index); //20

// BODMAS : Bracket, Of, Division, Multiplication, Addition, Substration
