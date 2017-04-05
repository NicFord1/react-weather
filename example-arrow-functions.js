// var names = ['Nicholas', 'Veronika', 'Jen'];
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Nicholas'));
//
// var person = {
//   name: 'Nicholas',
//   greet: function(name) {
//     console.log(this.name + ' says hi to ' + name)
//   }
// };
//
// var person = {
//   name: 'Nicholas',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

//Challenge Area
function add (a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

//addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(3, 5));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(1, 3));
