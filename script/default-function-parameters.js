// function add(x, y) {
//   console.log(x + y);
// }
//
// add();  // output would be NaN

function add(x = 5, y = 7) {
  console.log(x + y);
}
add(); // output 12

function haveFun(activityName = 'hiking', time = 3) {
  console.log(`Today I will go ${activityName} for ${time} hours.`);
}
haveFun();  //output ==> Today I will go hiking for 3 hours.
haveFun('biking', 5);  //output ==> Today I will go biking for 5 hours.
