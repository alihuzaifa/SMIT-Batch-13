// function greetUser() {
//   alert("Hello World");
// }

// var obj = {
//   name: "Ali Huzaifa",
//   age: 22,
//   greet: greetUser,
// };

// var obj = {
//     name
// }

// var date = new Date();
// console.log(date);

// function greetUser() {
//   alert("Hello");
// }

// function User(userName, userAge, gender, matric, inter) {
//   this.name = userName;
//   this.age = userAge;
//   this.gender = gender;
//   this.greet = greetUser;
//   this.qualification = {
//     matric: matric,
//     inter: inter,
//   };
// }
// var user = new User("Ali Huzaifa", 20, "Male", "Yes", "No");
// var user2 = new User("Aslam", 10, "Male", "No", "No");
// console.log(user.qualification.matric);
// console.log(user2);

// console.log(window);
// console.log(this);

// var obj = {
//   name: "ABCD",
//   age: 11,
//   func: function () {
//     console.log(this);
//   },
// };

// console.log(obj.func());
// console.log(this);
// obj.name = 'Ali'
// console.log(obj);

// function name() {
//   console.log(this);
// }
// name();

// var fruits = ["Apple", "Mango"];
// console.log(fruits);

// function User(userName, userAge) {
//   this.name = userName;
//   this.age = userAge;
// }

// User.prototype.greet = function () {
//   alert("Hello");
// };

// User.prototype.natioality = "Pakistani";

// var user = new User("Adil", 23);
// console.log(user);

// var fruits = ["Apple"]
// console.log(fruits);

var nameEl = document.getElementById("name");
var ageEl = document.getElementById("age");
var btn = document.getElementById("add-btn");
var allUsers = [];

function User(userName, userAge) {
  this.name = userName;
  this.age = userAge;
}

function addUser() {
  var userObj = new User(nameEl.value, ageEl.value);
  allUsers.push(userObj)
  console.log(allUsers);
}

btn.addEventListener("click", addUser);
