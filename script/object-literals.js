//ES5
// var cat = {
//   meow: function(times) {
//     console.log(Array(times).join('meow'));
//   },
//   purr: function(times) {
//     console.log(Array(times).join('purr'));
//   },
//   snore: function(times) {
//     console.log(Array(times).join('snore'));
//   }
// };
//
// cat.meow(3);  //output meowmeowmeow
// cat.purr(4);  //output purrpurrpurrpurr
// cat.snore(6); //output snoresnoresnoresnoresnoresnore

//ES6

var cat = {
  meow(times) {
    console.log('meow'.repeat(times));
  },
  purr(times) {
    console.log('purr'.repeat(times));
  },
  snore(times) {
    console.log('snore'.repeat(times));
  }
};

cat.meow(3);  //output meowmeowmeow
cat.purr(4);  //output purrpurrpurrpurr
cat.snore(6); //output snoresnoresnoresnoresnoresnore

//ES6
