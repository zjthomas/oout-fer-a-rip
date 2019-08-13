// const { Location } = require('./models');

// Location.find({ location: 'Lake Tahoe' })
//   .then((data) => console.log(data[0].data[1]))
//   .catch((err) => console.log(err));

// let a = ('hello-there').split('-')
// a.map((val) => {
//   console.log(val[0].toUpperCase())
//   // val.split('')[0].toUpperCase().join('')
// });

console.log(('hello-there').split('-').map((val) => (val.split('')[0].toUpperCase() + val.slice(1))).join(' '))
