// function fibonacci(n) {
//   let a = 0;
//   let b = 1;

//   for (let i = 0; i < n; i++) {
//     let next = a + b;
//     a = b;
//     b = next;
//   }

//   console.log(a, b);
// }

// fibonacci(10);

// var number = 10;
// var myName = "Ali Huzaifa";
// var isTeenage = false;
// console.log(number, myName, isTeenage);

// function calculator(number1, number2, operator) {
//   if (operator === "+") {
//     return number1 + number2;
//   } else if (operator === "-") {
//     return number1 - number2;
//   } else if (operator === "*") {
//     return number1 * number2;
//   } else if (operator === "/") {
//     return number1 / number2;
//   } else if (operator === "%") {
//     return number1 % number2;
//   } else {
//     return "Invalid Operator";
//   }
// }

// var sum = calculator(10, 10, "+");
// var sub = calculator(10, 10, "-");
// var mul = calculator(10, 10, "*");
// var div = calculator(10, 10, "/");
// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);

// var number = +prompt("Enter a Number", 0);
// if (number % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// var sentence = "A quick brown fox jumps over the lazy dog";
// var count = 0;
// for (var i = 0; i < sentence.length; i++) {
//   count++;
// }
// console.log(count);

// var firstName = "Ali ";
// var lastName = "Huzaifa";
// console.log(firstName + lastName);

// var number1 = +"10";
// var number2 = +"20";
// console.log(number1 + number2);

// function check(number) {
//   if (number === 0) {
//     return "Zero";
//   } else if (number > 0) {
//     return "Positive";
//   } else {
//     return "Negative";
//   }
// }

// var result = check(1);
// console.log(result);

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// var numbers = [289, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var count = 0;
// for (var i = 0; i < numbers.length; i++) {
//   var item = numbers[i];
//   count = count + item;
// }
// console.log(count);

var sentence = "SMIT";
var reverseSentence = "";
// 4-1 = 3
for (var i = sentence.length - 1; i >= 0; i--) {
  var item = sentence[i];
  reverseSentence += item;
}
console.log(reverseSentence);
