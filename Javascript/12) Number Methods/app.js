// var number = 10.9;
//
// console.log(Math.ceil(number));
// console.log(Math.round(number));
// console.log(Math.floor(number));

// var randomNumber = Math.random();
// console.log(randomNumber);

// var randomNumber = Math.random();

// if (randomNumber < 0.5) {
//   console.log("Heads");
// } else {
//   console.log("Tails");
// }

// var randomNumber = Math.random() * 10;
// var convertingIntoNumber = Math.ceil(randomNumber)
// console.log(convertingIntoNumber);

// var number = "10";
// console.log(parseFloat(number));
// console.log(parseInt(number));

// console.log(Number("12345"));
// console.log(Number({}));
// if (1 == true) {
//   console.log("Matched");
// }

// var number = 1000;
// console.log(number.toFixed(5));

// // "" === + parseInt parseFloat Number
// console.log(currentDate.getDay());
// 0

var currentDate = new Date();
var dayNumber = currentDate.getDay();
var daysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(daysName[dayNumber]);
