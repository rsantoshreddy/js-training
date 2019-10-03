// for (var i = 1; i < 6; i++) {
//   var result = '*'.repeat(i);
//   //   for (var j = 0; j < i; j++) {
//   //     result += '*';
//   //   }
//   console.log(result);
// }

var a = {
  name: 'teja',
  age: 23,
  address: {
    village: 'test',
    taluka: 'test2'
  }
};
var b = {
  name: 'teja',
  age: 23,
  address: {
    village: 'test',
    taluka: 'test2'
  }
};

var arrObj1 = [
  1,
  2,
  {
    a: 1,
    b: 2,
    c: 3
  },
  4,
  5
];
var arrObj2 = [
  1,
  2,
  {
    c: 3,
    b: 2,
    a: 1
  },
  4,
  5
];
// function compare(a, b) {
//   console.log(JSON.stringify(JSON.parse(JSON.stringify(a))));
//   console.log(JSON.stringify(b));
//   console.log(JSON.stringify(JSON.parse(JSON.stringify(a))) === JSON.stringify(JSON.parse(JSON.stringify(b))));
// }

function ObjectCompare(a, b) {
  var result = '';
  if (typeof a === 'object') {
    var keys = Object.keys(a);
    for (var i = 0; i < keys.length; i++) {
      if (a[keys[i]] === b[keys[i]]) {
        result = true;
      } else {
        if (typeof a[keys[i]] === 'object') {
          result = ObjectCompare(a[keys[i]], b[keys[i]]);
        } else {
          result = false;
          break;
        }
      }
    }
  }
  return result;
}
console.log(ObjectCompare(arrObj1, arrObj2));
