// console.log(10 + 20);
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
function xyz() {
  console.log('xyz() ====> ', this); // Window
}

function abc() {
  console.log('abc() ===> ', this); // abc
}
// + - * / ++ -- += -= new
xyz();
new abc();
