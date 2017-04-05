// //e2251cd4a52162add947e318a9251d78
// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback('Millersville', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City Not Found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Millersville').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

//if (typeof someVariable === 'number')
//Challenge Area -- return a promise then add them up, if both numbers, add them up, otherwise reject
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Both inputs must be numbers!');
    }
  });
}

//call twice, once with two numbers, once with a number and a string
addPromise(7, 9).then(function(result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise error', err);
});

addPromise(7, 'Nick').then(function(result) {
  console.log('promise success', result);
}, function(err) {
  console.log('promise error', err);
});
