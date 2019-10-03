// var x = true;
// if (x) {
//   var r = 'Raidu';
//   let blocked = 50;
//   const myConst = 5200;
//   console.log(r); // Raidu
//   console.log(blocked); // Raidu
//   console.log(myConst);
// }

// console.log(r); // Raidu
// console.log(myConst);
// console.log(blocked); // Raidu

// function bangalore() {
//   marathali = 'Marathali';
//   //   window.marathali = 'Marathali'
//   console.log(marathali); // 'Marathali
// }

// bangalore();
// console.log(marathali);

// var obj2 = (a, b) => {
//   console.log(this);
//   console.log(arguments);
// };

// Default function paramenters

// function add(a = 0, b = 0) {
//   return a + b;
// }

// var c = add(2, 7);
// var c = add();
// console.log(c);

// Rest and Spread

var obj = {
  name: 'Pavan',
  age: 33,
  address: 'bangalore',
  child: {
    name: 'Goutam',
    age: 3
  }
};

var { name, age, address, test, child } = obj;

console.log(child);

var arr = [1, 2, 3, 4, 5, 6];

var [a, b, y, , i] = arr;

console.log(a, b, y, i);

var obj = {
  name: 'Pavan',
  age: 33,
  address: 'bangalore',
  child: {
    name: 'Goutam',
    age: 3
  }
};

var { name, age, ...restProps } = obj;

// console.log(restProps);

var arr = [1, 2, 3, 4, 5, 6];

var [a, b, ...y] = arr;

console.log(a, b, y);

// Object literals

var o = Object({ name: 'x', age: 50 });
// console.log(o)
// console.log(Object.keys(o));

var p = {
  name: 'xyz',
  age: 78
};

var t = Object.assign(o, p);

console.log(t);

var a = { hasMoney: 10 };
var b = { hadNumber: 20 };

var c = Object.assign({}, a);

c.hasMoney = 20;

// console.log(a);
// console.log(c);

for (var i = 0; i < 10; i++) {
  // console.log(i);
}

var test = {
  name: 'test',
  age: 100,
  address: 'bangalre',
  prop1: 'prop1',
  prop2: 'prop2',
  prop3: 'prop3'
};

var t = [1, 2, 35];
// var keys = Object.keys(test);
// console.log(keys);
// for(var prop = 0; prop<keys.length; prop++){
//  console.log(test[keys[prop]]);
// }

// for (var pr of t) {
//   console.log(pr);
// }

// for (var prop in test) {
//   console.log(test[prop]);
// }

function Person(name, age) {
  this.name = name;
  this.age = age;
}

var child = new Person('child', 46);
var child2 = new Person('child2', 25);

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var man = new Animal('test', 20);

console.log(man);
