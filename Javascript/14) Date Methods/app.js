// var date = new Date();
// // var convertDateIntoString = date.toString();
// // console.log(convertDateIntoString);
// // console.log(date.getDay());
// // console.log(date.getMonth());
// // console.log(date.getDate());
// // console.log(date.getFullYear());
// // console.log(date.getHours());
// // console.log(date.getMinutes());
// // console.log(date.getSeconds());
// // console.log(date.getMilliseconds());
// // console.log(date.getTime());

// var days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// var day = date.getDay();
// console.log(days[day]);

// var date = new Date("June 1, 2020");
// console.log(date);

// var birthDate = new Date("August 30, 2002");
// var date = new Date();

// var birthDateTime = birthDate.getTime();
// var currentDateTime = date.getTime();
// // milliseconds ==> seconds  ==> minutes  ==>  hours
// var hours = Math.ceil((currentDateTime - birthDateTime) / 1000 / 60 / 60);
// console.log(hours);

var date = new Date();
date.setFullYear(2000)
date.setMonth(0)
console.log(date);
