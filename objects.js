// var num = 5; // number
// var str = '5'; // String

// function sum(a, b){
//     return a+b;
// }
// sum(1,2);

// function detectType(variable) {
//   console.log(typeof variable);
// }

// 5 primitive data types
// detectType(6); // number
// detectType('6'); // string
// detectType(undefined); // undefined
// detectType(false); // boolean
// detectType(null); // null, object

//  Overriding variables/ Overloading
// var a = 'Rayudu';
// console.log(a); // Rayudu
// a = 'Mahesh';
// console.log(a); // Mahesh
// a = 'Raja';
// console.log(a); // Raja

// var per1 = 'Rayudu';
// var rayuduEmail = 'rayudu@rayudu.com';
// // var phone = 123456987;
// // var adharId = 555;

// var per2 = 'Mahesh';
// var maheshEmail = 'mahesh@mahesh.com';
// // var phone = 987456321;
// // var adharId = 666;

// var per3 = 'Raja';
// var rajaEmail = 'raja@raja.com';
// // var phone = 987456321;
// // var adharId = 666;

// // name, phone, adharId

// console.log(mahesh); // Raja
// console.log(maheshEmail); // Raja

// var per1 = {
//   name: 'Rayudu',
//   phone: 123456789,
//   adharId: 555,
//   isMarried: true
// };

// var per2 = {
//   name: 'Mahesh',
//   phone: 987456123,
//   adharId: 666,
//   isMarried: false
// };

// var per3 = {
//   name: 'Raja',
//   phone: 987654321,
//   adharId: 777,
//   isMarried: true
// };

// console.log(per1.name);
// console.log(per1.email);
// console.log(per1.phone);
// console.log(per1.isMarried);

// var per4 = {};
// per4.name = 'Teja';
// per4.email = 'teja@teja.com';
// per4.phone = 12345;
// per4.isMarried = false;

// console.log(per4.email);
// console.log(typeof per4);
// // console.log(typeof null);

// var car = {
//   color: 'white',
//   brand: 'tata',
//   engine: 'stroke4',
//   price: 15201520
// };

// var a = 'capacity';
// car[a] = 4;
// car['capacity'] = 4;

// console.log(car.color);
// console.log(car['color']);
// console.log(car.capacity);

// 1. You can store mixed data types in one variable
// 2. Object types are copied with same reference number

// var num1 = 10;
// console.log('num1===>', num1);
// var num2 = num1;
// console.log('num2===>', num2);
// num2++;
// console.log('num2===>', num2);
// console.log('num1===>', num1);

// var per6 = {
//   name: 'Devikanth'
// };
// console.log('per6===>', per6);

// var per7 = per6;
// console.log('per7===>', per7);

// per7.name = 'Balu';
// console.log('per6===>', per6);
// console.log('per7===>', per7);

// per6.name = 'Pavan';
// console.log('per6===>', per6);
// console.log('per7===>', per7);

// var parent = {
//   name: 'xyz',
//   age: 35
// };
// console.log(parent);
// var child = parent;
// var child2 = parent;
// console.log(child);
// console.log(child2);

// child.name = 'abc';
// console.log(child);
// console.log(parent);

// child2.name = '2abxc';
// console.log(child);
// console.log(child2);
// console.log(parent);

// creating objects : 1
// var obj1 = {};
// obj1.name = 'xyz';

// // creating objects : 2
// var obj2 = { name: 'xyz' };

// // creating objects : 3
// var obj3 = new Object();
// console.log(obj3);

// // creating objects : 4
// var obj4 = new Object({ name: 'xyz' });
// console.log(obj4);

// var obj5 = obj4;

// console.log(obj5);

// obj5.name = 'abc';

// console.log(obj5);
// console.log(obj4);

// var obj6 = new Object(obj4);

// console.log(obj6);

// obj6.name = 'asdf';

// console.log(obj6);
// console.log(obj4);

// var obj6 = { name: 'xyz' };
// var obj7 = Object.assign({}, obj6);

// console.log('Before Change');
// console.log(obj6);
// console.log(obj7);

// obj7.name = 'abc';
// console.log('After Change');
// console.log(obj6);
// console.log(obj7);

// // Object copy : method 1 (reference also copied)
// var obj5 = { name: 'obj5' };
// var obj6 = obj5;

// // Object copy : method 2 (reference also copied)
// var obj5 = new Object();
// obj5.name = 'obj5';
// var obj6 = obj5;

// // Object copy : method 3 (reference also copied)
// var obj5 = new Object({ name: 'obj5' });
// var obj6 = obj5;

// // Object copy : method 4 (reference also copied)
// var obj5 = new Object({ name: 'obj5' });
// var obj6 = new obj5();

// // Object copy : method 5 (No reference also copied)
// var obj5 = { name: 'obj5' };
// var obj6 = Object.assign({}, obj5);

// Object copy : method 4 (reference also copied)
// var obj5 = new Object({ name: 'obj5' });
// var obj5 = { name: 'obj5' }; // recommended

// var obj6 = new obj5();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var newObj1 = new Person('newObj', 25);
// var newObj2 = new Person('newObj', 25);

// console.log(newObj1);
// console.log(newObj2);

// newObj2.name = 'newName';
// console.log(newObj1);
// console.log(newObj2);

// var obj = {
//   name: 'xyz',
//   age: 63
// };

// function sum(a, b) {
//   return a + b;
// }

// function person(name, age) {
//   return {
//     name: name,
//     age: age
//   };
// }

// var teja = person('teja', 26);
// var teja = { name: 'teja', age: 26 };

// var mahesh = person('mahesh', 27);
// var devi = person('devi', 28);
// console.log(teja);
// console.log(mahesh);
// console.log(devi);

// var maheshCopy = person(mahesh.name, mahesh.age);
// console.log(maheshCopy);

// maheshCopy.name = 'Mahesh Copy';

// console.log(mahesh);
// console.log(maheshCopy);

// var teja = {
//   name: 'teja',
//   age: 26,
//   place: 'gunturu',
//   talk: function() {
//     console.log('Teja is talkng...');
//   }
// };

// teja.talk();
// console.log(teja.name);
// console.log(teja.age);
// console.log(teja['place']); //gunturu // used by Array
// console.log(teja.place);
// Array

// var arrTeja = ['teja', 25, 'gunturu', 'white', true, null, , { married: false }, 1254, 5468789556, 2156464];
// console.log(arrTeja[0]);
// console.log(arrTeja[1]);
// console.log(arrTeja[2]);
// console.log(arrTeja[3]);
// console.log(arrTeja[4]);
// console.log(arrTeja[5]);

// for (var index = 0; index < arrTeja.length; index++) {
//   console.log(arrTeja[index]);
// }

// Copy Object using Object.assing
// Copy Object using functions and arguments
// Array

// var teja = {
//   name: 'teja',
//   age: 26,
//   place: 'gunturu',
//   talk: function() {
//     console.log('Teja is talkng...');
//   }
// };

// // var xyz = Object.keys(teja);
// // console.log(xyz);

// // for (var index = 0; index < xyz.length; index++) {
// //   console.log(teja[xyz[index]]);
// //   // teja['name'];
// // }

// for (var key in teja) {
//   console.log(key);
//   // console.log(teja[key]);
// }

// var arrTeja = ['teja', 25, 'gunturu', 'white', true, null, , { married: false }, 1254, 5468789556, 2156464];

// // for([create avariable] [in] [object/Array]);

// for (var xyz in arrTeja) {
//   console.log(xyz);
//   // console.log(arrTeja[xyz]);
// }

// Each and every function in JS have arguments and this with in it.
// Based on the way you call your function the value of this is going to change. ie. the context of this will vary.

var obj = {
  name: 'xyz'
};

var obj1 = new Object({ name: 'abc' });

function Person(name, age, id) {
  this.name = name;
  this.age = age;
  this.id = id;
  // this.talk = talk;
}

Person.prototype.talk = function() {
  console.log(this.name + 'is talking....');
};

var mahesh = new Person('Mahesh', 25, 123);

var teja = new Person('Teja', 25, 1523);

var xyz = Person('xyz', 60, 546);

console.log(mahesh.name);
mahesh.talk();

console.log(teja.name);
teja.talk();

var obj = { name: 'xyz' };
var obj = new Object({ name: 'xyz' });

var arr = [1, 2, 3, 4];
var arrObj = new Array(1, 2, 3, 4);

console.log(arr);
console.log(arrObj);

// 1. Object: It is collection of some properties and methods

// 5 primitive data types
// number
// string
// boolean

var five = 5;
// var fiveObj = new Number(5);

var s = String('test');
console.log(s.toUpperCase());
console.log(s.toLowerCase());

console.log(five.toFixed(5));

// console.log(fiveObj);
// console.log(fiveObj.toFixed(5));

// Reference Data Types
// Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// Boolean: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Window: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Window

var arr = [1, 2, 3]; // [1, 2, 3, 8]
arr.push(8);
console.log(arr);
