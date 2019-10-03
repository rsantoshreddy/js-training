// var primeBtn = document.getElementById('prime');

// primeBtn.addEventListener('click', function(event) {
//   console.log(event);
// });

// var form = document.getElementById('myform');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log(event.target.name.value);
//   console.log(event.target.age.value);
// });

// var divele = document.getElementById('divelemnt');
// divele.addEventListener('click', function(e) {
//   console.log(e);
// });

var parent = document.getElementById('parent');
var child = document.getElementById('child');

parent.addEventListener('click', function(e) {
  console.log('parent');
});

document.addEventListener('click', function() {
  console.log('document');
});
var body = document.getElementsByTagName('body')[0];

body.addEventListener('click', function() {
  console.log('body');
});

child.addEventListener('click', function(e) {
  e.stopPropagation();
  console.log('child');
});
